
			function add() {
			var a = $("#cart").val();
			a++;
			if (a => 1) {
				$("#plus").removeAttr("disabled");
			}
			$("#cart").val(a);
			};
			
			function subst() {
			var b = $("#cart").val();
			if (b.length > 0 && b >= 0) {
				b--;
				$("#cart").val(b);
			}
			else {
				$("#subs").attr("disabled", "disabled");
			}
			};
			
			function addchild() {
			var a = $("#cartchild").val();
			a++;
			if (a =>1) {
				$("#pluschild").removeAttr("disabled");
			}
			$("#cartchild").val(a);
			};
			
			function substchild() {
			var b = $("#cartchild").val();
			if (b.length > 0 && b >= 1) {
				b--;
				$("#cartchild").val(b);
			}
			else {
				$("#subschild").attr("disabled", "disabled");
			}
			};
			
	