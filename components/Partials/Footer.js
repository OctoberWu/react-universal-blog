// Footer.js
import React, { Component } from 'react'

export default class Footer extends Component {

  render(){
    
    const data = this.props.data  
    let footer_text
    if(data.globals.text){
      footer_text = data.globals.text.footer_text
    }

    let twitter
    let linkedin 
    let github
    if(data.globals.social){
      twitter = data.globals.social.twitter
      linkedin = data.globals.social.linkedin 
      github = data.globals.social.github
    }

    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <ul className="list-inline text-center">
                <li>
                  <a href={ twitter } target="_blank">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={ linkedin } target="_blank">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={ github } target="_blank">
                    <span className="fa-stack fa-lg">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="text-center">
                <img src="https://web-assets.cosmicjs.com/images/powered-by-cosmicjs.svg" class="w-180 h-40"/>
              </div>
              {/*<p className="copyright text-muted" dangerouslyInnerHTML={{__html: footer_text }}></p>*/}
            </div>
          </div>
        </div>
      </footer>
    )
  }
}