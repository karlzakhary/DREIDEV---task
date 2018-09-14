import { connect } from 'react-redux';
import itemsList from '../components/ItemsList';
import { getItems } from '../ducks/items';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props)
    }
}

export default connect(mapStateToProps)(itemsList);
