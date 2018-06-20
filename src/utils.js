
const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'


var formBody = [];
		for (var key of data.keys()) {
			var encodedKey = encodeURIComponent(key);
			var encodedValue = encodeURIComponent(data.get(key));
			formBody.push(encodedKey + "=" + encodedValue);
		}
		formBody = formBody.join("&");
		let resp = await fetch( url + '/api/0.1/company/create', {
			method: 'POST',
			body: formBody,
			headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' }
		})