<template>
	<div class="solar-system">
		<div class="sun"></div>

		<div class="orbit mercury-orbit">
			<div class="planet mercury"></div>
		</div>

		<div class="orbit venus-orbit">
			<div class="planet venus"></div>
		</div>

		<div class="orbit earth-orbit">
			<div class="planet earth">
				<div class="orbit moon-orbit">
					<div class="moon"></div>
				</div>
			</div>
		</div>

		<div class="orbit mars-orbit">
			<div class="planet mars"></div>
		</div>
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

.planet {
	position: absolute;
	border-radius: 50%;
}

/* Mercury */
.mercury-orbit {
	width: 28px;
	height: 28px;
	animation: orbit 3s linear infinite;
}

.mercury {
	width: 2px;
	height: 2px;
	background: #b6b6b6;
}

/* Venus */
.venus-orbit {
	width: 36px;
	height: 36px;
	animation: orbit 7s linear infinite;
}

.venus {
	width: 3px;
	height: 3px;
	background: #e6b87c;
}

/* Earth */
.earth-orbit {
	width: 42px;
	height: 42px;
	animation: orbit 10s linear infinite;
}

.earth {
	width: 4px;
	height: 4px;
	background: #4b6cb7;
}

.moon-orbit {
	width: 8px;
	height: 8px;
	animation: orbit 2.7s linear infinite;
}

.moon {
	width: 1px;
	height: 1px;
	background: #d3d3d3;
}

/* Mars */
.mars-orbit {
	width: 48px;
	height: 48px;
	animation: orbit 18s linear infinite;
}

.mars {
	width: 3px;
	height: 3px;
	background: #c1440e;
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
