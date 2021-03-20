import EventEmitter from 'events'

interface Subscription {
	unsubscribe: () => void;
}

interface Subscriber<T> {
	onNext?: (value: T) => void;
	onComplete?: () => void;
}

interface Observable<T> {
	subscribe: (o: Subscriber<T>) => Subscription;
}

interface Observer<T> {
	next: (value: T) => void;
	complete: () => void;
}

export function create<T>(f: (o: Observer<T>) => void): Observable<T> {
	let isCompleted = false

	return {
		subscribe(subscriber: Subscriber<T>) {
			f({
				next(v: T) {
					if (isCompleted) {
						return
					}
					if (subscriber.onNext) {
						subscriber.onNext(v)
					}
				},
				complete() {
					if (isCompleted) {
						return
					}
					isCompleted = true
					if (subscriber.onComplete) {
						subscriber.onComplete()
					}
				}
			})
			return {
				unsubscribe() {
					isCompleted = true
				}
			}
		}
	}
}

// #2 Basic observables creation
export function of<T>(...xs: T[]): Observable<T> {
	return create<T>(observer => {
		xs.forEach(observer.next)
		observer.complete()
	})
}

export function empty<T>(): Observable<T> {
	return create<T>(observer => {
		observer.complete()
	})
}

export const interval = (period: number): Observable<number> => {
	let isCompleted = false
	let v = 0
	let intervalId:any = -1

	return {
		subscribe(subscriber: Subscriber<number>) {
			intervalId = setInterval(() => {
				if (isCompleted) {
					return
				}
				if (subscriber.onNext) {
					subscriber.onNext(v)
				}
				v += 1
			}, period)
			return {
				unsubscribe() {
					isCompleted = true
					clearInterval(intervalId)
				}
			}
		}
	}
}

export const fromEvent = (
	emitter: EventEmitter,
	eventName: string
): Observable<Event> => {
	let isCompleted = false

	 return {
		subscribe(subscriber: Subscriber<Event>) {
			const listener = (v:any) => {
				if (isCompleted) {
					return
				}
				if (subscriber.onNext) {
					subscriber.onNext(v)
				}
			}
			emitter.on(eventName, listener)
			return {
				unsubscribe() {
					emitter.off(eventName, listener)
					isCompleted = true
				}
			}
		}
	}
}
