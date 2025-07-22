<section class="py-5">
	<div class="container">
		<h1 class="display-5 fw-bold mb-3">Claim Your Free Testnet Tokens ⛽</h1>
		<p class="lead mb-4">
			Enter your TON wallet address below to receive free testnet tokens instantly. Select your
			desired cryptocurrency from the options and start experimenting without any risk. More
			currencies coming soon!
		</p>

		<!-- Advertising placeholder -->
		<div
			class="rounded-3 bg-secondary bg-opacity-10 d-flex justify-content-center align-items-center mb-5 border"
			style="height: 150px;"
		>
			<span class="text-muted fst-italic">Your advertisement here</span>
		</div>

		<!-- Tabs for currency selection -->
		<ul class="nav nav-tabs mb-4" id="currencyTabs" role="tablist">
			<li class="nav-item" role="presentation">
				<button
					class="nav-link active"
					id="ton-tab"
					data-bs-toggle="tab"
					type="button"
					role="tab"
					aria-controls="ton"
					aria-selected="true">TON (Testnet) 🚀</button
				>
			</li>
			<li class="nav-item" role="presentation">
				<button class="nav-link disabled" type="button" aria-disabled="true" tabindex="-1"
					>ETH (Coming Soon) ⏳</button
				>
			</li>
			<li class="nav-item" role="presentation">
				<button class="nav-link disabled" type="button" aria-disabled="true" tabindex="-1"
					>BTC (Coming Soon) ⏳</button
				>
			</li>
			<li class="nav-item" role="presentation">
				<button class="nav-link disabled" type="button" aria-disabled="true" tabindex="-1"
					>USDT (Coming Soon) ⏳</button
				>
			</li>
		</ul>

		<!-- Claim form card -->
		<div class="card shadow-sm mx-auto" style="max-width: 480px;">
			<div class="card-body d-flex flex-column">
				<form>
					<div class="mb-3">
						<label for="walletAddress" class="form-label fw-semibold">Your TON Wallet Address</label
						>
						<input
							type="text"
							class="form-control"
							id="walletAddress"
							placeholder="Enter your wallet address"
							required
						/>
					</div>

					<div class="mb-3">
						<label class="form-label fw-semibold">Amount to be sent</label>
						<div class="form-control bg-light text-dark" aria-readonly="true" readonly>
							10 Testnet TON
						</div>
					</div>

					<div class="mb-4">
						<label class="form-label fw-semibold">Next claim available in</label>
						<div class="form-control bg-light text-dark" aria-readonly="true" readonly>
							00:12:45
						</div>
					</div>

					<button type="submit" class="btn btn-primary w-100">Claim Tokens 🎉</button>
				</form>
			</div>
		</div>
		<div
			class="rounded-3 bg-secondary bg-opacity-10 d-flex justify-content-center align-items-center mb-5 mt-5 border"
			style="height: 150px;"
		>
			<span class="text-muted fst-italic">Your advertisement here</span>
		</div>
	</div>
</section>
