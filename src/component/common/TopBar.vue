<template>
	<header class="bar bar-nav">
			<div class="buttons-tab">
			    <router-link :to="{ path: '/'}" class="tab-link button" exact>推荐</router-link>
			    <router-link :to="{ path: '/rank'}" class="tab-link button">排行</router-link>
			    <router-link :to="{ path: '/music'}" class="tab-link button">歌单</router-link>
			    <router-link :to="{ path: '/mv'}" class="tab-link button">MV</router-link>
		  	</div>
	</header>
</template>
<script>
	
</script>
<style scoped>
	.bar{
		padding: 0;
		background-color: #fff;
	}
	.bar .button{
		top: 0;
	}
	.buttons-tab:after{
		display: none;
	}
	.router-link-active{
		color: #0894ec;
	    border-color: #0894ec;
	    z-index: 100;
	}
</style>