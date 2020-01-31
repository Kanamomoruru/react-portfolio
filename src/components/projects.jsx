import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img.jpg)'}}>
									<div className="project_icon">
										<span><i className="icon-folder" /></span>
										<span className="project_icon_title">Project 1</span>
									</div>
									<div className="project_name">
										<span className="project_name_title">Vibes.media</span>
									</div>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Vibes.media</a></h3>
											<span>A startup media service which focuses on real news with implementing SDGs.</span>
											<p className="icon">
												<span><a href="https://vibes.media"><i className="icon-share3" /></a></span>
												<span>Nuxt, Node, AWS</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img.jpg)'}}>
									<div className="project_icon">
										<span><i className="icon-folder" /></span>
										<span className="project_icon_title">Project 2</span>
									</div>
									<div className="project_name">
										<span className="project_name_title">Easy Tetris</span>
									</div>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Easy Tetris</a></h3>
											<span>A tile-matching puzzle game which is famous all over the world and using vue.js cdn.</span>
											<p className="icon">
												<span><a href="https://kanata-easy-tetris.netlify.com"><i className="icon-share3" /></a></span>
												<span><a href="https://github.com/Kanamomoruru/vue-easyTetris"><i className="icon-github" /></a></span>
												<span>Vue, SCSS</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img.jpg)'}}>
									<div className="project_icon">
										<span><i className="icon-folder" /></span>
										<span className="project_icon_title">Project 3</span>
									</div>
									<div className="project_name">
										<span className="project_name_title">Freewill HP</span>
									</div>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Freewill HP</a></h3>
											<span>A home page which is my previous company's and using wordpress.</span>
											<p className="icon">
												<span><a href="https://free-will.co"><i className="icon-share3" /></a></span>
												<span>Wordpress, GSAP, Docker</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img.jpg)'}}>
									<div className="project_icon">
										<span><i className="icon-folder" /></span>
										<span className="project_icon_title">Project 4</span>
									</div>
									<div className="project_name">
										<span className="project_name_title">Minesweeper</span>
									</div>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Minesweeper</a></h3>
											<span>A single-player puzzle game. Using Vue.js</span>
											<p className="icon">
												<span><a href="https://kanata-minesweeper.netlify.com"><i className="icon-share3" /></a></span>
												<span><a href="https://github.com/Kanamomoruru/vue-minesweeper"><i className="icon-github" /></a></span>
												<span>Vue, SCSS</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img.jpg)'}}>
									<div className="project_icon">
										<span><i className="icon-folder" /></span>
										<span className="project_icon_title">Project 5</span>
									</div>
									<div className="project_name">
										<span className="project_name_title">FWFS</span>
									</div>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">FWFS</a></h3>
											<span>A startup accelerator to give success to someone who have a startup idea and the same time implementing SDGs.</span>
											<p className="icon">
												<span><a href="https://www.freewill-freespace.com/"><i className="icon-share3" /></a></span>
												<span>Nuxt, Python, AWS</span>

											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img.jpg)'}}>
									<div className="project_icon">
										<span><i className="icon-folder" /></span>
										<span className="project_icon_title">Project 6</span>
									</div>
									<div className="project_name">
										<span className="project_name_title">Personal Website V2</span>
									</div>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Personal Website V2</a></h3>
											<span>My first portfolio website I designed and built in 2019. I learned quite a bit about HTML, CSS, and SEO. Since then, I think my web development and design skills have improved immensely.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-github" /></a></span>
												<span>Gatsby, SCSS</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
