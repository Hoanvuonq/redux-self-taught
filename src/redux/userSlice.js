import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Hoanvuonq',
        age: '20',
        about: "I'm  a software engineer",
        avaUrl: 'https://scontent.xx.fbcdn.net/v/t39.1997-6/318732032_393415326311108_8922551079752698179_n.webp?stp=dst-png_s168x128&_nc_cat=105&ccb=1-7&_nc_sid=0572db&_nc_ohc=bYdJMLk4aPgAX-ACiLZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfDau5cpVhopzKmYSig3n0MuVXezG9muguu22DoRE3KwlQ&oe=63FF498D',
        themeColor: '#ff9051',
        loading: false,
        error: false,
    },

    reducers: {
        updateStart: (state)=>{
            state.loading = true;
        },
        updateError: (state)=>{
            state.loading = false;
            state.error = true;
        },
        updateSuccess: (state,action)=>{
            state.loading = false;
            state.error = false;

            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
            state.themeColor = action.payload.themeColor;
        }
    },
});

export const { updateStart, updateError, updateSuccess   } = userSlice.actions;
export default userSlice.reducer;
