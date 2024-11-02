<template>
	<div class="solar-system">
		<div class="sun" />
		<div class="orbit mercury-orbit" />
		<div class="orbit venus-orbit" />
		<div class="orbit earth-orbit" />
		<div class="orbit mars-orbit" />
	</div>
</template>

<script>
export default {
	name: "SolarSystem",
};
</script>

<style scoped>
.solar-system {
	position: relative;
	width: 48px;
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: transparent;
}

.sun {
	position: absolute;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background: radial-gradient(#ffd700, #ff8c00);
	box-shadow: 0 0 12px #ff8c00;
}

.orbit {
	position: absolute;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.mercury-orbit {
	width: 28px;
	height: 28px;
	animation: orbit 3s linear infinite;
}

.venus-orbit {
	width: 36px;
	height: 36px;
	animation: orbit 7s linear infinite;
}

.earth-orbit {
	width: 42px;
	height: 42px;
	animation: orbit 10s linear infinite;
}

.mars-orbit {
	width: 48px;
	height: 48px;
	animation: orbit 18s linear infinite;
}

@keyframes orbit {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
