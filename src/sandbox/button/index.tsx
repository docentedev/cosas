import Button from "../../components/button";
import Icon from "../../components/icons";

const ButtonSandbox = () => {
    return <div>
        <div className="my-4">
            <Button iconLeft={<Icon name="AllDone" />} onClick={console.log}>Primary</Button>
            <Button iconLeft={<Icon />} variant="secondary" onClick={console.log}>Secondary</Button>
            <Button iconLeft={<Icon />} variant="ternary" onClick={console.log}>Ternary</Button>
            <Button iconLeft={<Icon />} variant="dashed" onClick={console.log}>Border Dashed</Button>
        </div>
        <div className="my-4">
            <Button size="m" iconLeft={<Icon name="AllDone" />} onClick={console.log}>Block</Button>
            <Button size="m" onClick={console.log}>Block</Button>
            <Button size="m" variant="ternary" onClick={console.log}>Block</Button>
        </div>
        <div className="my-4">
            <Button size="l" iconLeft={<Icon name="AllDone" />} onClick={console.log}>Block</Button>
            <Button size="l" onClick={console.log}>Block</Button>
            <Button size="l" variant="ternary" onClick={console.log}>Block</Button>
        </div>
        <div className="my-4">
            <Button iconRight={<Icon />} size="s" onClick={console.log}>Primary s</Button>
            <Button iconRight={<Icon />} size="m" onClick={console.log}>Primary m</Button>
            <Button iconRight={<Icon />} size="l" onClick={console.log}>Primary l</Button>
            <Button iconRight={<Icon />} size="xs" onClick={console.log}>Primary xs</Button>
            <Button iconLeft={<Icon />} iconRight={<Icon />} size="xs" onClick={console.log}>Primary xs</Button>
        </div>
        <div className="my-4">
            <Button disabled iconRight={<Icon />} size="s" onClick={console.log}>Disabled</Button>
            <Button disabled iconRight={<Icon />} size="m" onClick={console.log}>Disabled</Button>
            <Button disabled iconRight={<Icon />} size="l" onClick={console.log}>Disabled</Button>
            <Button disabled iconRight={<Icon />} size="xs" onClick={console.log}>Disabled</Button>
            <Button disabled iconLeft={<Icon />} iconRight={<Icon />} size="xs" onClick={console.log}>Disabled</Button>
        </div>
        <div className="my-4">
            <Button loading iconLeft={<Icon />} size="xs" onClick={console.log}>Primary xs</Button>
            <Button loading iconLeft={<Icon />} size="s" onClick={console.log}>Primary xs</Button>
            <Button loading size="m" onClick={console.log}>Primary xs</Button>
            <Button loading iconLeft={<Icon />} size="l" onClick={console.log}>Primary xs</Button>
            <Button loading variant="secondary" iconLeft={<Icon />} size="xs" onClick={console.log}>Primary xs</Button>
            <Button loading variant="ternary" iconLeft={<Icon />} size="s" onClick={console.log}>Primary xs</Button>
            <Button loading variant="dashed" size="m" onClick={console.log}>Primary xs</Button>
            <Button loading variant="secondary" disabled iconLeft={<Icon />} size="l" onClick={console.log}>Primary xs</Button>
        </div>
    </div>
};

export default ButtonSandbox;