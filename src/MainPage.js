import React, { Component } from 'react';
import { View, Picker, TextInput, Text,FlatList} from 'react-native';
import Header from './common/Header';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import axios from 'axios';

class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = { bondNumber: "", bondType: "100",
        win:[],
        users: ["Muhammad","Zeeshan"]
     };
    }
    viewBond() {


        try {

            


            axios.get('http://192.168.0.101:8080/bonds/webapi/bondsPrize/'+this.state.bondType+'/'+this.state.bondNumber)
            .then( response => this.setState({win:response.data})
                
                
                )


           // console.warn("http://192.168.0.101:8080/bonds/webapi/bondsPrize/"+this.state.bondType+"/"+this.state.bondNumber)
            // return (<Header title={this.state.bondNumber}>

            // </Header>
            //)


        } catch (message) {
         //   console.warn(message)
        }
    }
    clearBond(){
        this.setState({win:''})
    }


    render() {
        return (

            <View>
                <Header title="Prize Bond" />

                <Card>
                    <CardSection>
                        <Picker
                            selectedValue={this.state.bondType}
                            style={{ flex: 1, height: 50, width: 100 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ bondType: itemValue })}>
                            <Picker.Item label="100" value="100" />
                            <Picker.Item label="200" value="200" />
                            <Picker.Item label="750" value="750" />
                            <Picker.Item label="1500" value="1500" />
                            <Picker.Item label="7500" value="7500" />
                            <Picker.Item label="15000" value="15000" />
                            <Picker.Item label="25000" value="25000" />
                            <Picker.Item label="40000" value="40000" />
                        </Picker>
                    </CardSection>
                    <CardSection>
                        <TextInput
                            style={{ flex: 2, fontSize: 18 }}
                            placeholder="Enter bond Number"
                            placeholderTextColor="gray"
                            keyboardType="number-pad"
                            maxLength={6}

                            value={this.state.bondNumber}
                            onChangeText={bondNumber => this.setState({ bondNumber })}
                        >

                        </TextInput>
                    </CardSection>
                    
                    <CardSection>
                        <Text>
                            {this.state.win.prize}
                        </Text>
                    </CardSection>



                    <CardSection>
                        <Button syyle={{ flexdirection: 'center' }}>
                            <FlatList
                                data={[{ key: 'a' }, { key: 'b' }]}
                                renderItem={({ item }) => <Text>{item.key}</Text>}
                            />
                            ADD
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.viewBond.bind(this)}>
                            CHECK
                        </Button>

                        <Button onPress={this.clearBond.bind(this)}>
                            RESET
                            
                        </Button>                
                    </CardSection>


                    <FlatList
                        data={this.state.users}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <View style={styles.flatview}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.email}>{item.email}</Text>
                            </View>
                        }
                        keyExtractor={item => item.email}
                    />


                </Card>
            </View>
        );
    }
}
export default MainPage;
