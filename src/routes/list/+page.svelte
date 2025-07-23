<script lang="ts">
	import Pagination from '$lib/components/pagination.svelte';
	import { ExternalLinkIcon } from 'lucide-svelte';
	import { Btc, Eth, Usdt, Usdc, Bnb, Abt, Trx } from 'svelte-cryptocurrency-icons';

	const { data } = $props();

	const icons: Record<string, any> = {
		btc: Btc,
		eth: Eth,
		usdt: Usdt,
		usdc: Usdc,
		bnb: Bnb,
		abt: Abt,
		trx: Trx
	};
</script>

<section class="py-5">
	<div class="container">
		<h1 class="display-5 fw-bold mb-3">Faucet Catalog 🔍</h1>
		<p class="lead mb-4">
			Explore a curated list of cryptocurrency faucets. Filter by supported coins, claim intervals,
			and daily limits to find the best faucet for your needs.
		</p>

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
							{#each data.faucets.rows as faucet}
								<tr>
									<td>
										<a
											href={faucet.url}
											target="_blank"
											rel="noopener noreferrer"
											class="text-decoration-none d-flex align-items-center"
										>
											{faucet.name}&nbsp;
											<ExternalLinkIcon size={12} />
										</a>
									</td>
									<td>{faucet.dailyLimit || 'no limit'}</td>
									<td>{faucet.claimIntervalMinutes || 'unknown'}</td>
									<td>
										{#each faucet.supportedCryptos.split(',') as coin}
											{@const Component = icons[coin.toLowerCase()]}
											<span class="d-flex align-items-center gap-1 me-2">
												<Component size={14} />
												{coin}
											</span>
										{/each}
									</td>
									<td><span class="badge bg-success">Active</span></td>
									<td>
										{Array.from({ length: 5 }, (_, idx) => {
											return idx >= faucet.rating ? '☆' : '★';
										}).join('')}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>

				<Pagination totalPages={data.faucets.totalPages} page={data.faucets.page} />
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
