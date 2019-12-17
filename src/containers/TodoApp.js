import { connect } from 'react-redux';
import { addToDo } from '../actions';
import { toggleToDo } from '../actions';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, TextInput, View, TouchableOpacity, Image, Text} from 'react-native';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            todos: [],
        }
    }

    addTodo = (text) => {
        if(this.props.text !== '') {
            this.props.addToDo(text);
            this.setState({text: ''});
        }
    };

    toggleTodo = (id) => {
        this.props.toggleToDo(id);

    };

    render() {
        return (
            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.body} flexDirection="row" flex={1}>
                        <View flexDirection="column" flex={4}>
                            <TextInput placeholder="What you plan to do, Sweetie?" style={styles.input} value={this.state.text}
                                       onChangeText={(text)=> this.setState({text})}/>
                        </View>
                        <View flexDirection="column" flex={1}>
                            <TouchableOpacity onPress={()=>this.addTodo(this.state.text)}>
                                <Image source={require('../img/plus-icon.png')} style={styles.plusIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <View>
                            {this.props.todos.map(todo =>
                                <TouchableOpacity key={todo.id} onPress={() => this.toggleTodo(todo.id)}>
                                    <View flex={1} flexDirection="row">
                                    <Image source={ todo.completed ? require('../img/check-mark.png') : require('../img/flower.png') } style={styles.addPlusIcon}/>
                                    <Text style={{
                                        marginBottom: 10,
                                        fontSize: 24,
                                        textDecorationLine: todo.completed ? 'line-through' : 'none'
                                    }}>{todo.text}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = {addToDo, toggleToDo};

// const mapDispatchToProps = dispatch => ({
//     toggleTodo: id => dispatch({ type: 'TOGGLE_TODO', id })
// });

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#fff',
    },

    body: {
        backgroundColor: '#fff',
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

    list: {
        backgroundColor: '#f6f6f6',
        marginTop: 40,
        padding: 20,
        borderColor: '#b3ffcc',
        borderRadius: 10,
        borderWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        minHeight: 300,
    },

    addPlusIcon: {
        width: 20,
        height: 20,
        display: 'flex',
        marginTop: 5,
        marginRight: 5,
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
