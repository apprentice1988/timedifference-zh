Tinytest.add('timedifference - minutes - ago', function(test) {
	var difference = vagueTime.get({
    from: 60,
    to: 0,
    units: 's'
	});
	test.equal(difference, '1 分钟之前');
});

Tinytest.add('timedifference - hours - ago', function(test) {
	var difference = vagueTime.get({
    from: 30000,
    to: 0,
    units: 's'
	});
	test.equal(difference, '8 小时之前');
});

Tinytest.add('timedifference - days - ago', function(test) {
	var difference = vagueTime.get({
    from: 300000,
    to: 0,
    units: 's'
	});
	test.equal(difference, '3 天之前');
});

Tinytest.add('timedifference - month - ago', function(test) {
	var difference = vagueTime.get({
    from: 3000000,
    to: 0,
    units: 's'
	});
	test.equal(difference, '1 个月之前');
});