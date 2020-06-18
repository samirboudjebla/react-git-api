import React, { Component } from 'react';

import './App.css';
import { Card } from './components/card/card.component';

import { CardList } from './components/card-list/cart-list.component'


const contacts = [{
  login: "samirboudjebla",
  id: 46310641,
  node_id: "MDQ6VXNlcjQ2MzEwNjQx",
  avatar_url: "https://avatars0.githubusercontent.com/u/46310641?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/samirboudjebla",
  html_url: "https://github.com/samirboudjebla",
  followers_url: "https://api.github.com/users/samirboudjebla/followers",
  following_url: "https://api.github.com/users/samirboudjebla/following{/other_user}",
  gists_url: "https://api.github.com/users/samirboudjebla/gists{/gist_id}",
  starred_url: "https://api.github.com/users/samirboudjebla/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/samirboudjebla/subscriptions",
  organizations_url: "https://api.github.com/users/samirboudjebla/orgs",
  repos_url: "https://api.github.com/users/samirboudjebla/repos",
  events_url: "https://api.github.com/users/samirboudjebla/events{/privacy}",
  received_events_url: "https://api.github.com/users/samirboudjebla/received_events",
  type: "User",
  site_admin: false,
  name: "Samir Boudjebla",
  company: null,
  blog: "",
  location: "Vancouver, BC",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 11,
  public_gists: 0,
  followers: 1,
  following: 3,
  created_at: "2019-01-02T06:07:16Z",
  updated_at: "2020-06-10T22:30:26Z"
},
    {
        login: "sam",
        id: 73,
        node_id: "MDQ6VXNlcjcz",
        avatar_url: "https://avatars0.githubusercontent.com/u/73?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/sam",
        html_url: "https://github.com/sam",
        followers_url: "https://api.github.com/users/sam/followers",
        following_url: "https://api.github.com/users/sam/following{/other_user}",
        gists_url: "https://api.github.com/users/sam/gists{/gist_id}",
        starred_url: "https://api.github.com/users/sam/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/sam/subscriptions",
        organizations_url: "https://api.github.com/users/sam/orgs",
        repos_url: "https://api.github.com/users/sam/repos",
        events_url: "https://api.github.com/users/sam/events{/privacy}",
        received_events_url: "https://api.github.com/users/sam/received_events",
        type: "User",
        site_admin: false,
        name: "Sam Smoot",
        company: "Wieck Media",
        blog: "http://www.ssmoot.me",
        location: "Dallas, TX",
        email: null,
        hireable: true,
        bio: null,
        twitter_username: null,
        public_repos: 40,
        public_gists: 107,
        followers: 159,
        following: 5,
        created_at: "2008-01-28T19:01:26Z",
        updated_at: "2020-06-15T22:41:15Z"
    },
    {
        login: "jack",
        id: 3663558,
        node_id: "MDQ6VXNlcjM2NjM1NTg=",
        avatar_url: "https://avatars1.githubusercontent.com/u/3663558?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/jack",
        html_url: "https://github.com/jack",
        followers_url: "https://api.github.com/users/jack/followers",
        following_url: "https://api.github.com/users/jack/following{/other_user}",
        gists_url: "https://api.github.com/users/jack/gists{/gist_id}",
        starred_url: "https://api.github.com/users/jack/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/jack/subscriptions",
        organizations_url: "https://api.github.com/users/jack/orgs",
        repos_url: "https://api.github.com/users/jack/repos",
        events_url: "https://api.github.com/users/jack/events{/privacy}",
        received_events_url: "https://api.github.com/users/jack/received_events",
        type: "User",
        site_admin: false,
        name: "Jack",
        company: null,
        blog: "https://jack.github.io",
        location: "United Kingdom",
        email: null,
        hireable: null,
        bio: "\\",
        twitter_username: null,
        public_repos: 0,
        public_gists: 1,
        followers: 0,
        following: 0,
        created_at: "2013-02-21T21:26:12Z",
        updated_at: "2020-03-20T12:34:23Z"
    },
    {
        login: "bob",
        id: 1436,
        node_id: "MDQ6VXNlcjE0MzY=",
        avatar_url: "https://avatars2.githubusercontent.com/u/1436?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/bob",
        html_url: "https://github.com/bob",
        followers_url: "https://api.github.com/users/bob/followers",
        following_url: "https://api.github.com/users/bob/following{/other_user}",
        gists_url: "https://api.github.com/users/bob/gists{/gist_id}",
        starred_url: "https://api.github.com/users/bob/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/bob/subscriptions",
        organizations_url: "https://api.github.com/users/bob/orgs",
        repos_url: "https://api.github.com/users/bob/repos",
        events_url: "https://api.github.com/users/bob/events{/privacy}",
        received_events_url: "https://api.github.com/users/bob/received_events",
        type: "User",
        site_admin: false,
        name: "Vadim Kalion",
        company: null,
        blog: "",
        location: null,
        email: null,
        hireable: null,
        bio: null,
        twitter_username: null,
        public_repos: 12,
        public_gists: 2,
        followers: 11,
        following: 4,
        created_at: "2008-02-28T05:38:20Z",
        updated_at: "2020-06-16T13:26:46Z"
    }
];

class App extends Component {


  render() {
    return (
      <div>
            <CardList contacts={contacts} />
      </div>
    );
  }




}

export default App;
