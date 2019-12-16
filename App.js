
import React from 'react';
import store from './src/stores';
import { Provider } from 'react-redux';
import {SafeAreaView, ScrollView, StyleSheet, TextInput, View, TouchableOpacity, Image, Text} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            type: '',
            todos: [],
        };
    }

    addTodo = (text) => {
        this.type.setState({type: 'ADD_TODO', text});
        this.text.setState({text: ' '});
    };

  render() {
    return (
        <Provider store={store}>
            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.body} flexDirection="row" flex={1}>
                        <View flexDirection="column" flex={4}>
                            <TextInput placeholder="What you plan to do, Sweetie?" style={styles.input} value={this.state.text}
                                       onChangeText={(text)=>this.setState({text})}/>
                        </View>
                        <View flexDirection="column" flex={1}>
                            <TouchableOpacity onPress={()=>this.addTodo(this.state.text)}>
                                <Image source={require('./src/img/plus-icon.png')} style={styles.plusIcon} />
                            </TouchableOpacity>
                        </View>

                        <View>
                            {this.state.todos.map(todo =>
                                <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                                    <Text style={{
                                        fontSize: 24,
                                        textDecorationLine: todo.completed ? 'line-through' : 'none'
                                    }} >{todo.text}</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                    <View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#fafafa',
    },

    body: {
        backgroundColor: '#fafafa',
    },

    input: {
        marginTop: 50,
        marginLeft: 30,
        padding: 10,
        fontSize: 20,
        borderWidth: 1,
        borderColor: "#66ff99",
        backgroundColor: "#b3ffcc",
        borderRadius: 5,
    },

    plusIcon: {
        width: 40,
        height: 40,
        position: 'absolute',
        zIndex: 5,
        top: 55,
    },

});




