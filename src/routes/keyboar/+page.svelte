
<script>
	let top = 50;
	let left = 50;
	let buu = false
	// up = 38
	// down = 40
	// right = 39
	// left = 37
    // caps = 20
    // a = 65
    //
	function onKeyDown(e) {
		 switch(e.keyCode) {
			 case 38:
				 top -= 50;
				 break;
			 case 40:
				 top += 50;
				 break;
			 case 37:
				 left -= 50;
				 break;
			 case 39:
				 left += 50;
				 break;
			case 65:
				buu = true
				break;
		 }
	}
	
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />
<div class="pene" class:pens={buu}>
	<div class="animation">
	<p>soup</p>
	</div>
</div>

<main>
	<div class="hi" style="left: {left}px; top: {top}px">
	</div>
</main>

<style>
	main {
		width: 500px;
		height: 500px;
		border: solid blue 1px;
		margin: 10px auto;
		position: relative
	}
	.hi {
		width: 50px;
		height: 50px;
		background-color: green;
		position: absolute;
	}
</style>