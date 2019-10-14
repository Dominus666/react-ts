import React from 'react';
import './Notifications.scss';
import { connect } from 'react-redux';
import notificationsModel from '../../models/notifications.models';
import * as actionsNotification from '../../redux/actions/common.actions';
import { HighlightOff, Error, CheckCircle } from '@material-ui/icons';

interface Props {
  notification: {
    type: string;
    message: string;
  };
  clearNotification:(notification: notificationsModel) => void;
};
interface State { 
  modal: boolean;
};

class Notifications extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      modal: false
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps: any) {
    if(nextProps.notification.type !== '' || nextProps.notification.message !== '') {
      return this.openModal();
      
    }
  }
  closeModal = () => {
     this.setState({modal: false})
     this.props.clearNotification({type: '', message: ''})
  };
  openModal = () => {
    this.setState({modal: true})
    setTimeout(this.closeModal, 3000)
  };

  render() {
    return (
      <div className={
        this.state.modal 
        ? 'openModal'
        : 'closeModal'
        }>
        <div className={'notifications-wrapper ' + this.props.notification.type}>
          <div className="notifications-text">
            {
              this.props.notification.type === 'error'
                ? < Error />
                : this.props.notification.type === 'success'
                  ? < CheckCircle />
                  : ''
            }

            <span>{this.props.notification.message}</span>
          </div>
          <div className="notifications-icon" onClick={this.closeModal}>< HighlightOff /></div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state: any) => ({
  notification: state.CommonReducer,
})
const mapDispatchToProps = (dispatch: any) => ({
  clearNotification: (notification: notificationsModel) => dispatch(actionsNotification.clearNotification(notification))
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);