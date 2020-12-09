# img-url-to-imgur
upload an image url to imgur

# example
```js
// using .then
const ImgurUpload = require('img-url-to-imgur');
const uploader = new ImgurUpload('your imgur client id here');

uploader.upload('image url').then(a => console.log(a));

// using async/await
const ImgurUpload = require('img-url-to-imgur');
const uploader = new ImgurUpload('your imgur client id here');
(async () => {
	const url = await uploader.upload('image url');
	console.log(url);
})();
```

# [NPM Page](https://npmjs.com/package/img-url-to-imgur)