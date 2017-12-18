var click = function (dom, handler) {
	dom .setAttribute ('interactable', '');
	[document .ontouchend ? 'touchend' : 'click'] .forEach (function (click) {
		dom .addEventListener (click, R .cond ([
			[function () {return window .dragging}, noop],
			[R .T, handler]
		]))
	})
}
/*var unclick = function (dom, handler) {
};*/

var stream_from_click_on = function (dom) {
	if (! dom ._click_stream) {
		dom ._click_stream = [stream ()] 
			.map (R .tap (function (x) {
				click (dom, x)
			}))
		[0];
	}
	return dom ._click_stream;
}


