import React from 'react';
import './IonicNav.scss'
import { AddCircleOutline, PieChartOutline, ExitOutline, InformationCircleOutline, ChatbubbleEllipsesOutline, ReaderOutline,RibbonOutline } from 'react-ionicons-icon';
import {
    IonApp,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuButton,
    IonRouterOutlet,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import img1 from './136413547_2091683304302020_4632246730070229773_n.jpg'
const IonicNav = () => {
    return (
        <div >
            <div style={{height:'50px'}}>
            <IonHeader translucent='true' style={{ position: 'fixed'}}>
                <IonToolbar id='toolbar' >
                    <IonTitle>
                        Blank
                    </IonTitle>
                    <IonButtons slot="start">
                        <IonMenuButton  menu='main-menu'></IonMenuButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            </div>
            <IonApp>
                <IonMenu menuId='main-menu' contentId='main' style={{ position: 'fixed' }}>
                    <IonContent>
                        <div className='menu-header-bg'></div>
                        <div className='header-content'>
                            <img src={img1} alt="" />
                            <IonLabel>
                                <h2>SI.Shahadat Hossen</h2>
                                <p>sub inspector</p>
                            </IonLabel>
                        </div>
                        <div className='action-button'>
                            <IonButton className='ion-button'>
                                <AddCircleOutline className='ion-icon'
                                    color={'#00000'}
                                    height="200px"
                                    width="200px"
                                />Admin
                            </IonButton>
                        </div>

                        <IonList lines='none' className='menu-item'>
                            <IonItem className='ion-item'>
                                <PieChartOutline className='ion-icon'
                                    color={'#00000'}
                                    height="250px"
                                    width="250px"
                                />
                                Dashboard
                            </IonItem>
                            <IonItem className='ion-item'>
                                <ExitOutline className='ion-icon'
                                    color={'#00000'}
                                    height="250px"
                                    width="250px"
                                />
                                Sign Out
                            </IonItem>
                            <IonItem className='ion-item'>
                                <InformationCircleOutline className='ion-icon'
                                    color={'#00000'}
                                    height="250px"
                                    width="250px"
                                />About
                            </IonItem>
                            <IonItem className='ion-item'>
                                <ChatbubbleEllipsesOutline className='ion-icon'
                                    color={'#00000'}
                                    height="250px"
                                    width="250px"
                                />Contact
                            </IonItem>
                            <IonItem className='ion-item'>

                                <ReaderOutline className='ion-icon'
                                    color={'#00000'}
                                    height="250px"
                                    width="250px"
                                />Blog
                            </IonItem>
                            <IonItem className='ion-item'>
                                <RibbonOutline className='ion-icon'
                                    color={'#00000'}
                                    height="250px"
                                    width="250px"
                                />Achieve
                            </IonItem>
                        </IonList>
                    </IonContent>
                </IonMenu>
                <IonRouterOutlet id='main'></IonRouterOutlet>
            </IonApp>
        </div>
    );
};

export default IonicNav;