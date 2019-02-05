import React from 'react';
import {
    Button,
    Body,
    Header,
    Left,
    Right,
    Icon,
    Title
} from 'native-base';
import PropTypes from 'prop-types';



const MainHeader = ({title, navigation, rightButton}) => (
    <Header>
        <Left>
            <Button
                transparent
            >
                <Icon
                    name='menu'
                    ID={'menu_button'}
                />
            </Button>
        </Left>
        <Body>
        <Title
            ID={'header_title'}>
            {title}
        </Title>
        </Body>
        {rightButton &&
        <Right>
            {rightButton}
        </Right>
        }
    </Header>
);


MainHeader.propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.object,
    rightButton: PropTypes.object
};

MainHeader.defaultProps = {
    title: 'Missing title'
};


export default MainHeader;


