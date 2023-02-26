import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../api/apiRequest';
import Input from '../InputFields/Input';

function EditPage(props) {
    const { setEdit } = props;
    const avaUrl = [
        'https://scontent.xx.fbcdn.net/v/t39.1997-6/319151988_474171408165664_3523511149680922822_n.webp?stp=dst-png_s168x128&_nc_cat=106&ccb=1-7&_nc_sid=0572db&_nc_ohc=KSJ1VGb7pmYAX88NmCO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfB3GLgxAMMfQIi2Yz9FqJ_hja5OHuhdS4JzJf5cDfuvjQ&oe=63FFA9C2',
        'https://scontent.xx.fbcdn.net/v/t39.1997-6/332159892_525835186101685_403756941233825734_n.webp?stp=dst-png_s168x128&_nc_cat=103&ccb=1-7&_nc_sid=0572db&_nc_ohc=BErgg7Le6fUAX90S6GE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfDG1-bZPDKUWn7MnBRHBZDS7ZG73cF3CCAjQn9mA6sshQ&oe=63FF0804',
        'https://scontent.xx.fbcdn.net/v/t39.1997-6/332103027_740246637769521_3017186455688495804_n.webp?stp=dst-png_s168x128&_nc_cat=100&ccb=1-7&_nc_sid=0572db&_nc_ohc=-GJ1BC1u3wQAX-V4aVb&_nc_oc=AQkYB4nZpaaj2lZytw0TUl6XeSfKBzBdc_i4xnzF7wgX_M97HbiDcKHWImg75wnDVS9LwcWuInMiIrWekqJmguR9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfAOpBK-BTUN9k1-Ik0FqJJFtAxg_wL56ZmpMkDZcFFtWQ&oe=63FEF7E6',
        'https://scontent.xx.fbcdn.net/v/t39.1997-6/318732032_393415326311108_8922551079752698179_n.webp?stp=dst-png_s168x128&_nc_cat=105&ccb=1-7&_nc_sid=0572db&_nc_ohc=bYdJMLk4aPgAX-ACiLZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfDau5cpVhopzKmYSig3n0MuVXezG9muguu22DoRE3KwlQ&oe=63FF498D',
        'https://scontent.xx.fbcdn.net/v/t39.1997-6/332066623_3271269683183990_2435484613822003907_n.webp?stp=dst-png_s168x128&_nc_cat=104&ccb=1-7&_nc_sid=0572db&_nc_ohc=rVfC7pOzEQIAX-WuIaA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfDNCzahtNBq8rczE2uXwgt4bqYTkJSHbuf4qpxnsWECuA&oe=63FF069A',
        'https://scontent.xx.fbcdn.net/v/t39.1997-6/332289162_1176776446532183_4904144020748023950_n.webp?stp=dst-png_s168x128&_nc_cat=107&ccb=1-7&_nc_sid=0572db&_nc_ohc=XF-2R-vMaqcAX8w4Ybv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfACD7CR7v5CbfcIMNwmCU3IUB7Kax76G17wrYOEvcyMPA&oe=63FDF7A5',
        'https://scontent.xx.fbcdn.net/v/t39.1997-6/319728091_703137294661866_908296415252896302_n.webp?stp=dst-png_s168x128&_nc_cat=104&ccb=1-7&_nc_sid=0572db&_nc_ohc=bsnChRxnJyEAX_sFbDK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfAjxQ1Iwvl0p63dLXFkzkiqjLg82Ie36gc5cxWvnXOE9w&oe=63FF2EF2',
        'https://scontent.xx.fbcdn.net/v/t39.1997-6/318155166_1212386942994689_5325107139315005785_n.webp?stp=dst-png_s168x128&_nc_cat=100&ccb=1-7&_nc_sid=0572db&_nc_ohc=hsvnOvsqXK8AX-r0vUO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfDxSpX9YeUHwJ8Km3vxHgHKLAGMt8Tnu_anXeEE_JqPQw&oe=63FEFCD5',
        'https://scontent.xx.fbcdn.net/v/t39.1997-6/318155166_1212386942994689_5325107139315005785_n.webp?stp=dst-png_s168x128&_nc_cat=100&ccb=1-7&_nc_sid=0572db&_nc_ohc=hsvnOvsqXK8AX-r0vUO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfDxSpX9YeUHwJ8Km3vxHgHKLAGMt8Tnu_anXeEE_JqPQw&oe=63FEFCD5',
    ];
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const [about, setAbout] = useState(user.about);
    const [theme, setTheme] = useState(user.themeColor);
    const [url, setUrl] = useState(user.avaUrl);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit(false);
        const updatedUser = {
            name: name,
            age: age,
            about: about,
            avaUrl: url,
            themeColor: theme,
        };
        updateUser(updatedUser,dispatch);
    };
    return (
        <form onSubmit={handleSubmit}>
            <section className="edit-container">
                <button className="close"> SAVE </button>
                <div className="edit-profile"> Edit Profile</div>
                <div className="input-container">
                    <Input
                        label="Display Name"
                        data={user.name}
                        setData={setName}
                    />

                    <Input label="Age" data={user.age} setData={setAge} />

                    <Input
                        inputType="textarea"
                        classStyle="input-about"
                        label="About"
                        data={user.about}
                        setData={setAbout}
                    />

                    <label> Profile Picture</label>
                    <div className="input-image-container">
                        {avaUrl.map((url) => {
                            return (
                                <img
                                    src={url}
                                    alt=""
                                    className="input-image"
                                    onClick={(e) => setUrl(e.target.src)}
                                />
                            );
                        })}
                    </div>
                    <div className="theme-container">
                        <label> Theme </label>
                        <input
                            className="theme-color"
                            type="color"
                            onClick={(e) => setTheme(e.target.value)}
                        />
                    </div>
                </div>
            </section>
        </form>
    );
}

export default EditPage;
