import { all, call, put, takeLatest } from "@redux-saga/core/effects";

import UserActionTypes from "./user.types";

import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from '../../firebase/firebase.utils'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "@firebase/auth";
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth, additionalData)
{
    try{
        const user = yield call(createUserProfileDocument,userAuth,additionalData);
        yield put(signInSuccess(user))
    }catch(error){
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle()
{
    try{
        const { user } = yield signInWithPopup(auth, googleProvider);
        yield getSnapshotFromUserAuth(user)
    }catch(error){
        yield put(signInFailure(error))
    }
}

export function* signInWithEmail({payload: {email, password}})
{
    try{
        const {user} = yield signInWithEmailAndPassword(auth, email, password)
        //console.log(user)
        yield getSnapshotFromUserAuth(user)
    }catch(error){
        yield put(signInFailure(error))
    }
}

export function* isUserAuthenticated()
{
    try{
        const userAuth = yield getCurrentUser()
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    }catch(error){
        yield put(signInFailure(error))
    }
}

export function* signOut()
{
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    }catch(error){
        yield put(signOutFailure(error))
    }
}

export function* signUp({payload: {email, password, displayName}}){
    try{
        const { user } = yield createUserWithEmailAndPassword( auth, email, password)  
        //yield getSnapshotFromUserAuth({...user, displayName})
        yield put(signUpSuccess({user, additionalData: {displayName}}))
    }catch(error){
        yield put(signUpFailure())
    }
}

export function* signInAfterSignUp({payload: {user, additionalData}})
{
    yield getSnapshotFromUserAuth(user, additionalData)
}

export function* onGoogleSignInStart() 
{
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart()
{
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession()
{
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart()
{
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart()
{
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess()
{
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas()
{
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}