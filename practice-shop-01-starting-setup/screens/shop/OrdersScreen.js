import React from 'react';
import { FlatList, Platform, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  HeaderButton from '../../UI/HeaderButton';

const OrderScreen = props => {
    const orders = useSelector(state => state.orders.orders)

    return (
        <FlatList 
        data={orders} 
        keyExtractor={item => item.id } 
        renderItem={itemData => <Text>{itemData.item.totalAmout}</Text>}/>
    )
};

OrderScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Orders',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="Menu"
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    }
}

export default OrderScreen;