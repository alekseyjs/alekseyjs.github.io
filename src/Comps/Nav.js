import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = styled.header`
  width: 100%;
  border-bottom: 10px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //padding: 0px 100px 0;
  height: 140px;
  margin-bottom: 60px;
  background: #f8f8f8;

  .logo a {
    padding-top: 33px;
		padding-left: 15px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;
    p {
      width: 500px;
      display: block;
    }
    em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }
  .gray {
    color: #ccc;
  }
  a {
    color: #222;
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
			list-style-type: none;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: tomato;
      }
    }
    a.active {
      color: #222;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
			padding-left: 15px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      font-size: 2rem;
			height: 50px;
			width: 50px;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

class Nav extends Component {
	constructor (props) {
		super(props)
		this.state = {
			isExpanded: false
		}
	}
	handleToggle (e) {
		e.preventDefault()
		this.setState({
			isExpanded: !this.state.isExpanded
		})
	}
	render () {
		const { isExpanded } = this.state
		let sty = { textDecoration: 'none', color: '#009900' }
		let aSty = { color: '#FF8000' }
		return (
			<Navigation>
				<div className='logo'>
					<Link to='/'>
						<em>
							<div className={'letterhead'}>
								<span className={'name'}>logo</span>
							</div>
						</em>
					</Link>
				</div>
				<nav className='nav'>
					<svg
						xmlns={'http://www.w3.org/2000/svg'}
						height={'329'}
						viewBox={'0 0 424 329'}
						width={'424'}
						className={'fa fa-bars'}
						style={{ transform: 'scale(0.3)' }}
						onClick={(e) => this.handleToggle(e)}>
						<g fill='#fff'>
							<path d='m0 0h424v51h-424z'/>
							<path d='m0 139h424v51h-424z'/>
							<path d='m0 278h424v51h-424z'/>
						</g>
					</svg>
					<ul className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}>
						<a target={'_blank'} href={'https://exchange.pancakeswap.finance/#/swap?outputCurrency='}
						style={{paddingRight: '10px'}}>
							Buy
						</a>
						<NavLink exact to={'/about'} style={sty} activeStyle={aSty}>
							<li>About</li>
						</NavLink>
						<NavLink activeClassName={'active'} to={'/docs'}>
							<li>Docs</li>
						</NavLink>
					</ul>
				</nav>
			</Navigation>
			// 	<div id={'mnav'}>
			// 		<NavLink exact to={'/'} style={sty} activeStyle={aSty}>logo</NavLink>
			// 		{/*<NavLink exact to={'/buy'} style={sty} activeStyle={aSty}>buy</NavLink>*/}
			// 		<a href={'https://exchange.pancakeswap.finance/#/swap?outputCurrency='} style={sty}>Buy</a>
			// 		<NavLink exact to={'/about'} style={sty} activeStyle={aSty}>About</NavLink>
			// 		<NavLink exact to={'/docs'} style={sty} activeStyle={aSty}>Docs</NavLink>
			// 		{/*<NavLink exact to={'/social'} style={sty} activeStyle={aSty}>social</NavLink>*/}
			// 	</div>
		)
	}
}

export default Nav
