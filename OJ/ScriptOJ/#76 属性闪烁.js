const flikerProps = obj => {
	descriptors = Object.getOwnPropertyDescriptors(obj)
	Object.values(descriptors).forEach(descriptor => {
		descriptor.enumerable = !descriptor.enumerable
	})
	Object.defineProperties(obj, descriptors)
}
