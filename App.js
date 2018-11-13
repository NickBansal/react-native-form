import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native'
import { Container, Header, Title, Content, Text, Icon, Card, CardItem, 
  Item, Body, Right, Button, Input, Form, Textarea, Left 
} from 'native-base'
import * as api from './api'


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      username: null,
      score: null,
      password: null,
      confirm: null
    };
  }

  PostContact = (user) => {
    // api.getUser()
    // .then(user => console.log(user))
    api.addUser(user)
    .then(user => {
      const { name, username, score } = user
      this.setState({
        name, 
        username, 
        score, 
        password: null, 
        confirm: null
      })
    }).then(() => {
      console.log(this.state)
    })
    .catch(error => console.log(error, '<<<<< ERROR'))
  }


  render() {
    const { container } = styles
    return (
      <Container>
      <Header androidStatusBarColor="#1362af" style={{ backgroundColor: 'gold' }}>
        <Body style = {{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
          <Title style={{ color: 'orange' }}>LOGIN FORM</Title>
        </Body>
      </Header>
        <Content>


          <Card style={styles.postCard}>
          <View>
              <CardItem>
                  <Item>
                      <Input placeholder='Name' onChangeText={(name) => this.setState({name})} ref={'nameClear'}/>
                  </Item>
              </CardItem>
              <CardItem>
                  <Item>
                      <Input placeholder='Username' onChangeText={(username) => this.setState({username})} ref={'usernameClear'}/>
                  </Item>
              </CardItem>
              <CardItem>
                  <Item>
                      <Input placeholder='Password' secureTextEntry={true} onChangeText={(password) => this.setState({password})} ref={'passwordClear'} keyboardType = {'ascii-capable'}/>
                  </Item>
              </CardItem>
              <CardItem>
                  <Item>
                      <Input placeholder='Confirm Password'  secureTextEntry={true} onChangeText={(confirm) => this.setState({confirm})} ref={'confirmClear'} keyboardType = {'ascii-capable'}/>
                  </Item>
              </CardItem>
                  
              <CardItem>
                  <Left>
                  </Left>
                  <Body>
                      <Button success onPress={() => this.PostContact(this.state)}>
                      <Text>SUBMIT</Text>
                      </Button>
                  </Body>
                  <Right>
                  </Right>
              </CardItem>
              <CardItem>
                  <Left>
                  </Left>
                  <Body>
                      <Button success onPress={() => this.PostContact(this.state)}>
                      <Text>ADD SCORE</Text>
                      </Button>
                  </Body>
                  <Right>
                  </Right>
              </CardItem>
          </View>
          </Card>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
