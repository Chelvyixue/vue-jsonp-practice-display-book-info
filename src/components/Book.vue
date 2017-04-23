<template>
	<div class="book">
		<div class="book-info">
			<h1>{{ title }}</h1>
			<p>{{ author }}</p>
			<p>{{ isbn }}</p>
			<p>{{ publisher }}</p>
		</div>
		<div class="book-description" v-html="prettified"></div>
		<div class="footer">
			<a v-if="exist" :href="doubanLink" target="_blank">在 book.douban.com 上查看</a>
		</div>
	</div>
</template>

<script>
export default {
	props: ['id'],
	data () {
		return {
			title: '',
			isbn: '',
			author: '',
			publisher: '',
			description: '',
			doubanLink: '',
			exist: false
		}
	},

	mounted() {
		if (this.id) {
			this.$jsonp('https://api.douban.com/v2/book/' + this.id).then(json => {
				this.title = json.title;
				this.author = json.author.join(' ');
				this.isbn = json.isbn13;
				this.publisher = json.publisher;
				this.description = json.summary;
				this.doubanLink = json.alt;
				this.exist = true;
			}).catch(err => {
				this.title = '找不到对应 id 的图书';
				this.exist = false;
			});
		}
	},

	computed: {
		prettified () {
			var paras = this.description.split(/(?:\r\n|\n\r|\n)/);
			paras = paras.map(str => '<p>' + str + '</p>');
			return paras.join('\n');
		}
	}
}
</script>

<style>
.book {
	font-family: Helvetica, Arial, sans-serif;
}

.book-info {
	padding: 80px 20px 40px;
	padding: 80px calc(50% - 240px) 40px;
	background: linear-gradient(90deg, #909690, #a0a6a0);
}

.book-description {
	padding: 40px;
	padding: 40px calc(50% - 240px);
	line-height: 1.5;
}

.footer {
	text-align: right;
	padding: 40px;
	padding: 40px calc(50% - 240px);
	background: #545652;
}
</style>