/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');
var Doc = require('./Doc.jsx');
var NavLink = require('flux-router-component').NavLink;

var Component = React.createClass({
    render: function () {
        var context = this.props.context;
        return (
            <section id="docs">
                <div className="content">
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-5-24">
                            <div className="doc-menu">
                                <ul>
                                    <li><NavLink routeName="docs" navParams={{key: 'overview'}} context={context}>Overview</NavLink></li>
                                    <li><NavLink routeName="docs" navParams={{key: 'quick-start'}} context={context}>Quick Start</NavLink></li>
                                </ul>

                                <h3>Guides</h3>
                                <ul>
                                    <li><NavLink routeName="docs" navParams={{type: 'guides', key: 'dispatcher'}} context={context}>Dispatcher</NavLink></li>
                                    <li><NavLink routeName="docs" navParams={{type: 'guides', key: 'stores'}} context={context}>Stores</NavLink></li>
                                    <li><NavLink routeName="docs" navParams={{type: 'guides', key: 'actions'}} context={context}>Actions</NavLink></li>
                                    <li><NavLink routeName="docs" navParams={{type: 'guides', key: 'controller-views'}} context={context}>Controller Views</NavLink></li>
                                    <li><NavLink routeName="docs" navParams={{type: 'guides', key: 'fetching-data'}} context={context}>Services / Fetching Data</NavLink></li>
                                    <li><NavLink routeName="docs" navParams={{type: 'guides', key: 'plugins'}} context={context}>Plugins</NavLink></li>
                                </ul>

                                <h3>Tutorials</h3>
                                <ul>
                                    <li><NavLink routeName="docs" navParams={{type: 'tutorials', key: 'chat'}} context={context}>Chat</NavLink></li>
                                    <li><NavLink routeName="docs" navParams={{type: 'tutorials', key: 'routing'}} context={context}>Routing</NavLink></li>
                                    <li><NavLink routeName="docs" navParams={{type: 'tutorials', key: 'todo-mvc'}} context={context}>Todo MVC</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="pure-u-1 pure-u-md-19-24">
                            <Doc content={this.props.content} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Component;
