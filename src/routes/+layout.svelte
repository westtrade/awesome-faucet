<script lang="ts">
	import { DropletIcon, ListIcon, PlusCircleIcon } from 'lucide-svelte';
	import '../app.css';

	let { children } = $props();
</script>

<header class="sticky-top">
	<nav class="navbar navbar-expand-md navbar-dark bg-primary shadow-sm">
		<div class="container">
			<a class="navbar-brand fw-bold d-flex" href="/">
				<DropletIcon />
				Awesome Faucet
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navmenu"
				aria-controls="navmenu"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="navbar-collapse collapse" id="navmenu">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item">
						<a class="nav-link" href="/list">
							<ListIcon />
							Faucet Directory
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/add">
							<PlusCircleIcon />
							Add faucet
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>

{@render children()}

<footer class="mt-auto">
	<div class="container">&copy; 2025 Awesome Faucet. All rights reserved.</div>
</footer>
