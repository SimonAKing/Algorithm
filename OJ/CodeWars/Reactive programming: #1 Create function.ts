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

	const observable: Observable<T> = {
		subscribe(subscriber: Subscriber<T>) {
			f({
				next(value: T) {
					if (isCompleted) {
						return
					}
					subscriber?.onNext?.(value)
				},
				complete() {
					if (isCompleted) {
						return
					}
					isCompleted = true
					subscriber?.onComplete?.()
				}
			})
			return {
				unsubscribe() {
					isCompleted = true
				}
			}
		}
	}

	return observable
}
