<section class="py-5">
	<div class="container">
		<h1 class="display-5 fw-bold mb-3">Add a Faucet 🚰</h1>
		<p class="lead mb-4">
			Use this form to submit a new faucet for inclusion in our catalog. Please fill out all fields
			carefully to help us verify and list your faucet.
		</p>

		<!-- Banner block -->
		<div
			class="rounded-3 bg-secondary bg-opacity-10 d-flex justify-content-center align-items-center mb-5 border"
			style="height: 150px;"
		>
			<span class="text-muted fst-italic">Your advertisement here</span>
		</div>

		<div class="row justify-content-center">
			<div class="col-md-8 col-lg-6">
				<div class="card shadow-sm rounded-3 p-4">
					<form>
						<div class="mb-3">
							<label for="faucetName" class="form-label fw-semibold">Faucet Name</label>
							<input
								type="text"
								class="form-control"
								id="faucetName"
								placeholder="Enter faucet name"
								required
							/>
						</div>

						<div class="mb-3">
							<label for="faucetUrl" class="form-label fw-semibold">Faucet URL</label>
							<input
								type="url"
								class="form-control"
								id="faucetUrl"
								placeholder="https://example.com"
								required
							/>
						</div>

						<div class="mb-3">
							<label for="dailyLimit" class="form-label fw-semibold">Daily Withdrawal Limit</label>
							<input
								type="number"
								min="0"
								class="form-control"
								id="dailyLimit"
								placeholder="Amount per day"
								required
							/>
						</div>

						<div class="mb-3">
							<label for="claimInterval" class="form-label fw-semibold"
								>Claim Interval (minutes)</label
							>
							<input
								type="number"
								min="0"
								class="form-control"
								id="claimInterval"
								placeholder="Time between claims"
								required
							/>
						</div>

						<div class="mb-4">
							<label for="supportedCoins" class="form-label fw-semibold"
								>Supported Cryptocurrencies</label
							>
							<input
								type="text"
								class="form-control"
								id="supportedCoins"
								placeholder="e.g. TON, ETH, BTC"
							/>
							<div class="form-text">
								Enter supported cryptocurrencies separated by commas. This free-text approach allows
								for flexible input of tokens, including new or less common ones not yet in our
								database.
							</div>
						</div>

						<button type="submit" class="btn btn-primary w-100">Submit Faucet</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
