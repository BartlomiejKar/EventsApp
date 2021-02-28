import React from 'react';
import { Item, Segment, Icon, List, Button } from "semantic-ui-react";
import ListAttende from "./ListAttende"

const DashBoardListItem = () => {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src="./assets/user.png" />
                        <Item.Content>
                            <Item.Header />
                            <Item.Description content="Event Title">
                                lorem ipsum
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock" /> Date
                    <Icon name="marker" /> Venue
                </span>
            </Segment>
            <Segment>
                <List horizontal>
                    <ListAttende />
                    <ListAttende />
                    <ListAttende />
                </List>
            </Segment>
            <Segment clearing>
                <span>Description of events</span>
                <Button color="teal" floated="right" content="View" />
            </Segment>
        </Segment.Group>
    )
}

export default DashBoardListItem;