<script>
	export let value = 0;
</script>

<div class="flex items-center pb-6 pt-2">
	<div class="w-full bg-white rounded-full h-3">
		<div
			class="bg-[#d00000] h-3 rounded-full transition-all duration-200"
			style="width: {value}%;"
		/>
	</div>
</div>
