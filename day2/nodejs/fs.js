var fs = require('fs');

fs.writeFile('fs_async', 'Hello async \n', function(err){
	if(err)
		throw err;

	fs.readFile('fs_async', 'utf-8', function(err, data){
		if(err)
			throw err;

		console.log('[READ] fs_async: ', data);
	});
});

fs.writeFileSync('fs_sync', 'Hello sync \n');
console.log('[READ] fs_sync: ', fs.readFileSync('fs_sync', 'utf-8'));
