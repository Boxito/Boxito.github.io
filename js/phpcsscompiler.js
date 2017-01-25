// JavaScript Document
$(function() {
	function errorHandler(e) {
		var msg = '';
		alert(e.code);
		switch (e.code) {
			case FileError.QUOTA_EXCEEDED_ERR:
				msg = 'QUOTA_EXCEEDED_ERR';
				break;
			case FileError.NOT_FOUND_ERR:
				msg = 'NOT_FOUND_ERR';
				break;
			case FileError.SECURITY_ERR:
				msg = 'SECURITY_ERR';
				break;
			case FileError.INVALID_MODIFICATION_ERR:
				msg = 'INVALID_MODIFICATION_ERR';
				break;
			case FileError.INVALID_STATE_ERR:
				msg = 'INVALID_STATE_ERR';
				break;
			default:
				msg = 'Unknown Error';
				break;
		};
		console.log('Error: ' + msg);
	}
	function onInitFs(fs) {
		fs.root.getFile('css/custom.php', {}, function(fileEntry) {
			// Get a File object representing the file,
			// then use FileReader to read its contents.
			fileEntry.file(function(file) {
				var reader = new FileReader();
				reader.onloadend = function(e) {
					var txtArea = document.createElement('textarea');
					txtArea.value = this.result;
					document.body.appendChild(txtArea);
				};
				reader.readAsText(file);
			}, errorHandler);
	  	}, errorHandler);
	}
	
	
	/*
	window.webkitStorageInfo.requestQuota(PERSISTENT, 1024*1024, function(grantedBytes) {
		window.webkitRequestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);
	}, function(e) {
	  	console.log('Error', e);
	});
	*/
	var requestedBytes = 1024*1024; 
	navigator.webkitPersistentStorage.requestQuota(requestedBytes, function(grantedBytes) {
			window.webkitRequestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);
		}, function(e) {
			console.log('Error', e);
		}
	);
});