// 2. 用react 写一个tab组件（以图书分类为tab标签名，切换不同的tab获取不同分类下的书籍）
import React, { PureComponent } from 'react'

export default class TabList extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			tab: props.defaultTab
		}
		this.onChangeTab = this.onChangeTab.bind(this)
	}

	onChangeTab(tab) {
		this.setState({ tab })
	}

	render() {
		const { tabList } = this.props
		const { tab } = this.state
		return (<div className="tab-list-wrap">
			{ tabList.map(t => (
				/* .hidden { display: none } */
				<div key={t.id} className={`tab-list ${t.type !== tab ? 'hidden' : ''}`} onClick={() => this.onChangeTab(t.type)}>
					<div className="tab-name">{t.name}</div>
					<div className="tab-list">
						{t.list.length !== 0 ? t.list.map((book, index) => (
							/* 假设 tablist 中的item 静态的, 可以使用 index 作为key */
							<p key={index} className="tab-list-item"> {book}</p>
						)) : <div className="tab-list-empty-tip">暂无项目</div>}
					</div>
				</div>
			))
			}
		</div>)
	}
}

const tabList = [{
	id: 'uuid-1',
	type: 'computer',
	name: 'computer',
	list: ['CSS世界', '你不知道的JavaScript', '你不知道的JavaScript', '你不知道的JavaScript', '你不知道的JavaScript']
}, {
	id: 'uuid-2',
	type: 'math',
	name: 'math',
	list: ['高等数学', '线性代数', '高等数学', '线性代数']
}, {
	id: 'uuid-3',
	type: 'art',
	name: 'art',
	list: ['book-1']
}]

const defaultTab = 'computer'

// usage:
// <TabList tabList={...} defaultTab={...}/>
