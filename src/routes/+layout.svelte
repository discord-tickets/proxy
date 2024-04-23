<script>
	import '../app.css';
	import '@fortawesome/fontawesome-free/css/all.css';
</script>

<div>
	<slot />
	<footer class="text-slate-400 flex flex-col items-center gap-8 my-12">
		<div class="flex items-center gap-6">
			<a href="https://eartharoid.me">
				<img
					src="https://static.eartharoid.me/eartharoid/logo/c/wordmark.png"
					alt="eartharoid"
					class="h-4"
				/>
			</a>
			<i class="fa-solid fa-plus"></i>
			<a href="https://bisecthosting.com/discordtickets?ref=dtickets.rocks">
				<img src="/bisect.svg" alt="Bisect Hosting" class="h-8" />
			</a>
		</div>
		<div class="flex gap-4 decoration-dotted text-xs">
			<a href="https://discordtickets.app/terms" class="underline">Terms</a>
			<a href="https://discordtickets.app/privacy" class="underline">Privacy</a>
		</div>
	</footer>
</div>
