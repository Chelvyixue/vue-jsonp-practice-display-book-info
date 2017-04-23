<template>
	<div class="book">
		<div class="book-info">
			<h1>{{ title }}</h1>
			<p>{{ author }}</p>
			<p>{{ isbn }}</p>
			<p>{{ publisher }}</p>
		</div>
		<div class="book-description">
			<p v-html="prettified"></p>
		</div>
		<div class="footer">
			<a :href="doubanLink" target="_blank">在 book.douban.com 上查看</a>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			title: '',
			isbn: '',
			author: '',
			publisher: '',
			description: '',
			doubanLink: ''
		}
	},

	created () {
		this.title = '文学回忆录';
		this.isbn = '9787549530816',
		this.author = '木心';
		this.publisher = '广西师范大学出版社';
		this.description = '文学是可爱的。生活是好玩的。艺术是要有所牺牲的。\n八十年代末，木心客居纽约时期，亦自他恢复写作、持续出书以来，纽约地面的大陆和台湾同行在异国谋饭之中，居然促成木心开讲“世界文学史”，忽忽长达五年的一场“文学的远征”——从1989年1月15日开课，到1994年1月9日最后一课，每位听课人轮流提供自家客厅，在座者有画家、舞蹈家、史家、雕刻家等等。\n听课学生陈丹青说，“我们当年这样地胡闹一场，回想起来，近于荒谬的境界：没有注册，没有教室，没有课本，没有考试与证书，更没有赞助与课题费，不过是在纽约市皇后区、曼哈顿区、布鲁克林区的不同寓所中，团团坐拢来，听木心神聊。”\n菜单开出来，大家选。从古希腊神话、新旧约，到诗经、楚辞，从中世纪欧洲文学，到二十世纪文学世界，东方西方通讲，知识灵感并作。其中听的听，讲的讲，“金句”纷披，兀自燃烧。“讲完后，一部文学史，重要的是我的观点。”木心说。古代，中世纪，近代，每个时代都能找到精神血统，艺术亲人。\n他爱先秦典籍，只为诸子的文学才华；他以为今日所有伪君子身上，仍然活着孔丘；他想对他爱敬的尼采说：从哲学跑出来吧；他激赏拜伦、雪莱、海涅，却说他们其实不太会作诗；他说托尔斯泰可惜“头脑不行”，但讲到托翁坟头不设十字架，不设墓碑，忽而语音低弱了，颤声说：“伟大！”而谈及萨特的葬礼，木心脸色一正，引尼采的话：唯有戏子才能唤起群众巨大的兴奋。\n木心开讲时六十二岁。多少民国书籍与读者，湮灭了。他的一生，密集伴随愈演愈烈的文化断层。他不肯断，而居然不曾断，这就是纽约世界文学史讲座潜藏的背景：在累累断层之间、之外、之后，木心始终将自己尽可能置于世界性的文学景观，倘若不是出走，这顽强而持久的挣扎，几乎濒于徒劳。\n如今，听课学生陈丹青整理那五年那五册听课笔记，共八十五讲，逾四十万字，结集这本大书时，已不再将之仅仅看做“世界文学史讲座”。诚如木心所最早时设想的那样，这是他自己的“文学回忆录”，是一部“荒诞小说”，“在自己的身上，克服这个时代”。\n这也是木心留给世界的礼物，文学的福音书。\n本书首次披露的木心先生及其亲属的珍贵照片，由陈丹青先生和木心的外甥王韦先生提供。附印民国版本的世界文学书影，是一部民国出版史的私人旁证。';
		this.doubanLink = 'https://book.douban.com/subject/20440644/';
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