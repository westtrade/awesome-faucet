<section class="py-5">
	<div class="container">
		<h1 class="display-5 fw-bold mb-3">Faucet Catalog 🔍</h1>
		<p class="lead mb-4">
			Explore a curated list of cryptocurrency faucets. Filter by supported coins, claim intervals,
			and daily limits to find the best faucet for your needs.
		</p>

		<!-- Advertising placeholder -->
		<div
			class="rounded-3 bg-secondary bg-opacity-10 d-flex justify-content-center align-items-center mb-5 border"
			style="height: 150px;"
		>
			<span class="text-muted fst-italic">Your advertisement here</span>
		</div>

		<div class="row gx-4">
			<!-- Faucet table (left/main) -->
			<div class="col-lg-9 mb-4">
				<div class="table-responsive shadow-sm rounded-3 border">
					<table class="table-hover mb-0 table align-middle">
						<thead class="table-light">
							<tr>
								<th scope="col">Faucet Name</th>
								<th scope="col">Daily Limit</th>
								<th scope="col">Claim Interval</th>
								<th scope="col">Supported Coins</th>
								<th scope="col">Status</th>
								<th scope="col">Rating</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<a
										href="https://testnet-ton-faucet.example"
										target="_blank"
										rel="noopener noreferrer"
										class="text-decoration-none"
									>
										TON Testnet Faucet
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="ms-1"
											width="16"
											height="16"
											fill="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3z" />
											<path d="M5 5h5v2H6.41l9.3 9.29-1.42 1.42L5 6.41V11H3V5z" />
										</svg>
									</a>
								</td>
								<td>1000 TON</td>
								<td>15 min</td>
								<td>
									<img
										src="https://cryptologos.cc/logos/ton-token.svg?v=024"
										alt="TON"
										title="TON"
										width="20"
										height="20"
										class="me-1"
									/>
								</td>
								<td><span class="badge bg-success">Active</span></td>
								<td>★★★★☆</td>
							</tr>

							<tr>
								<td>
									<a
										href="https://eth-faucet.example"
										target="_blank"
										rel="noopener noreferrer"
										class="text-decoration-none"
									>
										Ethereum Faucet
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="ms-1"
											width="16"
											height="16"
											fill="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3z" />
											<path d="M5 5h5v2H6.41l9.3 9.29-1.42 1.42L5 6.41V11H3V5z" />
										</svg>
									</a>
								</td>
								<td>500 ETH</td>
								<td>30 min</td>
								<td>
									<img
										src="https://cryptologos.cc/logos/ethereum-eth.svg?v=024"
										alt="ETH"
										title="Ethereum"
										width="20"
										height="20"
										class="me-1"
									/>
								</td>
								<td><span class="badge bg-secondary">Inactive</span></td>
								<td>★★★☆☆</td>
							</tr>

							<!-- Добавить больше строк по мере необходимости -->
						</tbody>
					</table>
				</div>

				<!-- Pager -->
				<nav aria-label="Page navigation" class="mt-4">
					<ul class="pagination justify-content-center mb-0">
						<li class="page-item disabled">
							<a class="page-link" href="#" tabindex="-1" aria-disabled="true">&laquo; Prev</a>
						</li>
						<li class="page-item active" aria-current="page">
							<a class="page-link" href="#">1</a>
						</li>
						<li class="page-item"><a class="page-link" href="#">2</a></li>
						<li class="page-item"><a class="page-link" href="#">3</a></li>
						<li class="page-item"><a class="page-link" href="#">Next &raquo;</a></li>
					</ul>
				</nav>
			</div>

			<!-- Filters (right) -->
			<aside class="col-lg-3">
				<div class="card shadow-sm rounded-3 p-3">
					<h5 class="mb-3">Filters ⚙️</h5>

					<!-- Supported Coins filter -->
					<div class="mb-4">
						<label class="form-label fw-semibold">Supported Coins</label>
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="ton" id="filter-ton" checked />
							<label class="form-check-label" for="filter-ton">
								<img
									src="https://cryptologos.cc/logos/ton-token.svg?v=024"
									alt="TON"
									width="16"
									height="16"
									class="me-1"
								/> TON
							</label>
						</div>
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="eth" id="filter-eth" />
							<label class="form-check-label" for="filter-eth">
								<img
									src="https://cryptologos.cc/logos/ethereum-eth.svg?v=024"
									alt="ETH"
									width="16"
									height="16"
									class="me-1"
								/> Ethereum
							</label>
						</div>
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="btc" id="filter-btc" />
							<label class="form-check-label" for="filter-btc">
								<img
									src="https://cryptologos.cc/logos/bitcoin-btc.svg?v=024"
									alt="BTC"
									width="16"
									height="16"
									class="me-1"
								/> Bitcoin
							</label>
						</div>
					</div>

					<!-- Claim Interval filter -->
					<div class="mb-4">
						<label class="form-label fw-semibold">Claim Interval</label>
						<select class="form-select" aria-label="Claim Interval filter">
							<option value="">Any</option>
							<option value="15">15 minutes or less</option>
							<option value="30">30 minutes or less</option>
							<option value="60">1 hour or less</option>
							<option value="120">2 hours or less</option>
						</select>
					</div>

					<!-- Daily Limit filter -->
					<div class="mb-4">
						<label class="form-label fw-semibold">Daily Limit</label>
						<select class="form-select" aria-label="Daily Limit filter">
							<option value="">Any</option>
							<option value="100">Up to 100</option>
							<option value="500">Up to 500</option>
							<option value="1000">Up to 1000</option>
							<option value="5000">Up to 5000</option>
						</select>
					</div>

					<button class="btn btn-outline-primary w-100" type="button">Reset Filters</button>
				</div>
			</aside>
		</div>
	</div>
</section>
