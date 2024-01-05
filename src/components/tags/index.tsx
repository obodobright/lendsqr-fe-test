import styles from "./tags.module.scss";

enum UserStatus {
    Inactive = "inactive",
    Active = "active",
    Blacklisted = "blacklisted",
    Pending = "pending",
}



interface tagsProp {
    status: string;
}

const Tags = ({ status }: tagsProp) => {

    const displayStyle = status === UserStatus.Inactive ?
        { background: "#f5f5f7", color: "#545F7D" }
        : status === UserStatus.Active
            ? { background: "#f3fcf6", color: "#39CD62" }
            : status === UserStatus.Pending ?
                { background: "#fdf7e5", color: "#E9B200" }
                : { background: "#fce6eb", color: "#E4033B" }

    return (
        <div style={displayStyle} className={styles.tagsWrapper}>{status}</div>
    )
}
export default Tags

