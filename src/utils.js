
const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'

function createForm( formData ) {

	let form = new FormData()

	for (let key of Object.keys(data)) {
			let encodedKey = encodeURIComponent(key)
			let encodedVal = encodeURIComponent(formData[key])
			form.push(encodedKey + "=" + encodedVal)
		}

		form = form.join("&")

	return form

}

function sendForm( form, ) {

	let resp = await fetch( url + '/api/0.1/company/create', {
		method: 'POST',
		body: formBody,
		headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' }
	})

}

