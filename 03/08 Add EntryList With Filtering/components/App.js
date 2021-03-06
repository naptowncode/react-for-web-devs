import React, {
    StyleSheet,
    View
} from 'react-native';

import Summary from './Summary';
import Controls from './Controls';
import EntryList from './EntryList';
import entries from '../entries';
import u from '../helpers';

var App = React.createClass({
    getInitialState: function() {
        return {
            date: '',
            entries: {}
        }
    },
    deleteEntry: function(key) {
        delete this.state.entries[key];
        this.setState({entries : this.state.entries});
    },
    setDate: function(offset) {
        var date = new Date(this.state.date);
        date.setUTCDate(date.getUTCDate() + offset);
        this.state.date = u.storeDate(date);
        this.setState({
            date : this.state.date
        });
    },
    componentDidMount: function() {
        this.setState({
            date: '2016-01-07',
            entries: entries
        });
    },
    render: function() {
        return (
            <View style={styles.body}>
                <Summary date={this.state.date} entries={this.state.entries} />
                <Controls setDate={this.setDate} />
                <EntryList date={this.state.date} entries={this.state.entries} deleteEntry={this.deleteEntry} />
            </View>
        )
    }
});

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        flex: 1,
        padding: 40,
    }
});

export default App;