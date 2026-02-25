<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	let selectedCard = $state<number | null>(null);
	const cards = [1, 2, 3, 4, 5];

	function selectCard(card: number) {
		selectedCard = selectedCard === card ? null : card;
	}
</script>

<div
	class="bg-linen flex min-h-svh flex-col items-center justify-between overflow-hidden p-4 font-sans text-white md:p-8"
>
	<!-- Top Bar / Navigation -->
	<header class="z-10 flex w-full max-w-6xl items-center justify-between">
		<div class="flex items-center gap-3">
			<div
				class="flex h-10 w-10 items-center justify-center rounded-xl border border-white bg-gradient-to-b from-blue-400 to-blue-600 text-xl shadow-skuo-raised"
			>
				🃏
			</div>
			<h1 class="hidden text-2xl font-bold tracking-tight drop-shadow-lg sm:block">pPoker</h1>
		</div>

		<div class="flex items-center gap-4">
			<Card.Root
				class="bg-glass-glossy flex flex-row items-center gap-2 rounded-full border border-white/20 p-0 px-6 py-2 shadow-skuo-raised backdrop-blur-md"
			>
				<span class="text-sm font-bold tracking-wide">SESSION: ALPHA-9</span>
			</Card.Root>
			<Button
				variant="outline"
				class="skuo-button h-9 rounded-full px-4 font-bold text-black"
				onclick={() => console.log('Reveal')}
			>
				Reveal Cards
			</Button>
		</div>
	</header>

	<!-- Main Game Table -->
	<main class="my-8 flex w-full max-w-6xl flex-1 items-center justify-center">
		<div
			class="relative flex aspect-[2/1] w-full max-w-4xl items-center justify-center overflow-hidden rounded-[150px] border-[12px] border-[#3d2b1f] bg-[#1a472a] shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_100px_rgba(0,0,0,0.5)]"
		>
			<!-- Table Felt Texture -->
			<div
				class="pointer-events-none absolute inset-0 opacity-20"
				style="background-image: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%), repeating-conic-gradient(#ffffff 0% 25%, transparent 0% 50%) 50% / 2px 2px;"
			></div>

			<!-- Center Logo -->
			<div
				class="text-6xl font-black tracking-[0.2em] uppercase italic opacity-10 select-none md:text-8xl"
			>
				pPoker
			</div>

			<!-- Players around the table (Mock) -->
			<!-- North -->
			<div class="absolute -top-4 flex flex-col items-center gap-2">
				<div
					class="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-gradient-to-b from-gray-200 to-gray-400 text-xl shadow-skuo-raised grayscale"
				>
					<img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" />
				</div>
				<div
					class="rounded border border-white/10 bg-black/40 px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm"
				>
					Waiting...
				</div>
			</div>

			<!-- East -->
			<div class="absolute -right-4 flex items-center gap-3">
				<div
					class="rounded border border-white/10 bg-black/40 px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm"
				>
					Ready
				</div>
				<div
					class="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-gradient-to-b from-gray-200 to-gray-400 text-xl shadow-skuo-raised"
				>
					<img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="Avatar" />
				</div>
			</div>

			<!-- West -->
			<div class="absolute -left-4 flex items-center gap-3">
				<div
					class="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-gradient-to-b from-gray-200 to-gray-400 text-xl shadow-skuo-raised"
				>
					<img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" alt="Avatar" />
				</div>
				<div
					class="rounded border border-white/20 bg-blue-500/80 px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase shadow-lg backdrop-blur-sm"
				>
					Voted
				</div>
			</div>

			<!-- Table Cards Area -->
			<div class="flex gap-4">
				{#each [1, 2, 3] as i}
					<div
						class="flex h-24 w-16 items-center justify-center rounded-lg border border-white/10 bg-white/5"
					>
						<div class="h-18 w-12 rounded bg-white/5"></div>
					</div>
				{/each}
			</div>
		</div>
	</main>

	<!-- Selection Tray (Shelf) -->
	<footer class="mb-4 w-full max-w-5xl">
		<div
			class="bg-glass-glossy relative rounded-[40px] border border-white/20 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-10"
		>
			<div class="absolute top-0 right-0 left-0 mx-10 h-px rounded-full bg-white/30"></div>

			<div class="flex flex-col items-center">
				<h2 class="mb-8 text-lg font-bold tracking-wide text-white/90 uppercase drop-shadow-md">
					Pick your estimate
				</h2>

				<div class="flex w-full flex-wrap justify-center gap-4 sm:gap-6">
					{#each cards as card}
						<button
							class="skuo-poker-card group relative h-32 w-20 transition-all duration-500 sm:h-44 sm:w-28 {selectedCard ===
							card
								? '-translate-y-12 scale-110 sm:-translate-y-16'
								: 'hover:-translate-y-4'}"
							onclick={() => selectCard(card)}
						>
							<!-- Card Content -->
							<div
								class="skuo-poker-card-content absolute inset-0 flex flex-col items-center justify-between overflow-hidden rounded-xl border border-white bg-gradient-to-br from-[#ffffff] via-[#f8f8f8] to-[#e0e0e0] p-3 shadow-[0_10px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,1)] transition-transform sm:p-5"
							>
								<!-- Card Gloss -->
								<div
									class="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-transparent opacity-50"
								></div>
								<div
									class="pointer-events-none absolute -top-1/2 -left-1/2 h-full w-full rotate-45 bg-white/20"
								></div>

								<div class="self-start text-xs leading-none font-black text-blue-600 sm:text-sm">
									{card}
								</div>

								<div class="relative">
									<span
										class="text-4xl font-black text-gray-900 drop-shadow-[0_2px_1px_rgba(255,255,255,0.8)] sm:text-6xl"
										>{card}</span
									>
									<!-- Subtle inner shadow to the number -->
									<span
										class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 to-transparent bg-clip-text text-4xl font-black text-transparent sm:text-6xl"
										>{card}</span
									>
								</div>

								<div
									class="rotate-180 self-end text-xs leading-none font-black text-blue-600 sm:text-sm"
								>
									{card}
								</div>

								<!-- Selection Indicator -->
								{#if selectedCard === card}
									<div
										class="pointer-events-none absolute inset-0 rounded-xl border-4 border-blue-500/50"
									></div>
								{/if}
							</div>

							<!-- Drop Shadow when raised -->
							<div
								class="absolute -bottom-4 left-1/2 h-4 w-[80%] -translate-x-1/2 rounded-full bg-black/40 blur-xl transition-opacity duration-500 {selectedCard ===
								card
									? 'opacity-100'
									: 'opacity-0'}"
							></div>
						</button>
					{/each}
				</div>
			</div>
		</div>
	</footer>
</div>

<style>
	.skuo-poker-card {
		perspective: 1000px;
		user-select: none;
	}

	.bg-linen {
		/* Overriding with a more premium linen if needed, but using the one from layout.css */
		background-color: #2c2c2c;
	}

	/* Micro-interactions */
	button:active .skuo-poker-card-content {
		transform: scale(0.95);
	}
</style>
