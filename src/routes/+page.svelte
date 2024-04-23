<div class="container mx-auto">
	<div class="m-4 lg:m-12">
		<div class="max-w-2xl mx-auto lg:mt-24 bg-gray-800 p-4 lg:p-8 rounded-xl shadow-lg">
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-2">
					<img
						src="https://static.eartharoid.me/discord-tickets/logo/wordmark/gradient.png"
						alt="Discord Tickets"
						class="lg:w-4/5 mx-auto"
					/>
					<div class="flex items-center justify-center gap-4">
						<p class="text-slate-400 font-semibold uppercase text-center">In partnership with</p>
						<a href="https://bisecthosting.com/discordtickets?ref=dtickets.rocks">
							<img src="/bisect.svg" alt="Bisect Hosting" class="h-20 p-4" />
						</a>
					</div>
					<h1 class="text-3xl font-bold mt-4 text-center">Free Reverse Proxy</h1>
				</div>
				<p class="text-center mx-auto max-w-lg">
					This free service is offered <span class="font-bold"
						>exclusively to Bisect Hosting customers</span
					>
					for the purpose of securing a Discord Tickets installation. By using the service, you accept
					the
					<a href="https://discordtickets.app/terms" class="underline decoration-dotted"
						>terms and conditions</a
					>.
				</p>

				<form method="post">
					<p class="text-center font-bold text-lg mt-4">Securely proxy traffic from</p>
					<div
						class="flex flex-col lg:flex-row justify-center items-stretch lg:items-center gap-2 my-2"
					>
						<div>
							<label for="from_subdomain" class="block mb-1 text-sm font-medium text-slate-400"
								>Subdomain</label
							>
							<input
								name="to_subdomain"
								class="form-input w-full"
								type="url"
								placeholder="subdomain"
							/>
						</div>
						<div>
							<!-- block lg:ml-3  -->
							<label for="to_subdomain" class="block mb-1 text-sm font-medium text-slate-400"
								>Domain</label
							>
							<!-- <p class="hidden lg:inline pr-1 select-none font-bold text-xl">.</p> -->
							<select name="from_domain" class="form-input pr-8 w-full" disabled>
								<option value="__IGNORE__">dtickets.rocks</option>
							</select>
						</div>
					</div>

					<p class="text-center font-bold text-lg mt-4">to</p>
					<div
						class="flex flex-col lg:flex-row justify-center items-stretch lg:items-center gap-2 my-2"
					>
						<div>
							<label for="to_subdomain" class="block mb-1 text-sm font-medium text-slate-400"
								>Subdomain</label
							>
							<input
								name="to_subdomain"
								class="form-input w-full lg:w-fit"
								type="url"
								placeholder="subdomain"
							/>
						</div>
						<div>
							<label for="to_subdomain" class="block mb-1 text-sm font-medium text-slate-400"
								>Domain</label
							>
							<!-- <p class="hidden lg:block pr-1 select-none font-bold text-xl">.</p> -->
							<select name="to_domain" class="form-input pr-8 w-full lg:w-fit">
								<option value="bh-games.com">bh-games.com</option>
								<option value="gameservers.fun">gameservers.fun</option>
								<option value="gamesservers.io">gamesservers.io</option>
								<option value="play-network.io">play-network.io</option>
							</select>
						</div>
						<div>
							<label for="to_port" class="block mb-1 text-sm font-medium text-slate-400">Port</label
							>
							<!-- <p class="hidden lg:block pr-1 select-none font-bold text-xl">:</p> -->
							<input
								name="to_port"
								class="form-input w-full lg:w-28"
								type="number"
								placeholder="1234"
							/>
						</div>
					</div>
					<div class="text-center mt-8">
						<button type="submit" class="bg-blurple hover:bg-blurple/75 text-white p-2 px-5 rounded-lg font-semibold transition duration-300 focus:outline-none border-2 border-white/25 focus:ring-2 ring-white">Create my subdomain</button>
					</div>
				</form>

				<!-- <div>
					<input
						class="w-8/12 p-1 px-2 bg-gray-900 select-all font-mono rounded-lg text-gray-400 text-center"
						value="Input a valid IP address above"
					/>
				</div> -->
			</div>
		</div>
	</div>
</div>
