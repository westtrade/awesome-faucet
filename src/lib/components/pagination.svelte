<script lang="ts">
	const {
		totalPages = 1,
		page = 1
	}: {
		totalPages?: number;
		page?: number;
	} = $props();

	const pages = $derived(Array.from({ length: totalPages }, (_, i) => i + 1));
</script>

<nav aria-label="Page navigation" class="mt-4">
	<ul class="pagination justify-content-center mb-0">
		<li class="page-item {page === 1 ? 'disabled' : ''}">
			<a
				class="page-link"
				href={page > 1 ? `?page=${page - 1}` : '#'}
				tabindex={page === 1 ? -1 : undefined}
				aria-disabled={page === 1}
			>
				&laquo; Prev
			</a>
		</li>

		{#each pages as p}
			<li
				class="page-item {p === page ? 'active' : ''}"
				aria-current={p === page ? 'page' : undefined}
			>
				<a class="page-link" href={`?page=${p}`}>{p}</a>
			</li>
		{/each}

		<li class="page-item {page === totalPages ? 'disabled' : ''}">
			<a
				class="page-link"
				href={page < totalPages ? `?page=${page + 1}` : '#'}
				tabindex={page === totalPages ? -1 : undefined}
				aria-disabled={page === totalPages}
			>
				Next &raquo;
			</a>
		</li>
	</ul>
</nav>
