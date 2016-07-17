NG-BLURR
========
Angular 1.x Directive for blur loading image

Link `ng-blurr.css` `ng-blurr.js` to your file.

Add `Blurr` to `angular.module` like `angular.module('your-app-name',['Blurr']);`

Use `ng-blurr` attribute in `img` tag

Inside `ng-blurr` put original pic url and inside ng-src/src put base64 of small thumbnail (30px width) faster loading.

`<img ng-blurr="fullImageSourceLink" ng-src="{{base64OfThumbnailPic}}">`
