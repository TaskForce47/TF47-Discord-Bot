import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("workshopItems")
export class WorkshopItems {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar" })
    publishedfileid!: string;

    @Column({ type: "varchar" })
    creator!: string;

    @Column({ type: "varchar" })
    creator_app_id!: string;

    @Column({ type: "varchar" })
    consumer_app_id!: string;

    @Column({ type: "varchar" })
    filename!: string;

    @Column({ type: "varchar" })
    file_size!: string;

    @Column({ type: "varchar" })
    file_url!: string;

    @Column({ type: "varchar" })
    title!: string;

    @Column({ type: "varchar" })
    time_created!: string;

    @Column({ type: "varchar" })
    time_updated!: string;

    @Column({ type: "boolean" })
    banned!: boolean;

    @Column({ type: "varchar" })
    banned_reason!: string;

    @Column({ type: "varchar" })
    subscriptions!: string;

    @Column({ type: "varchar" })
    favorited!: string;

    @Column({ type: "varchar" })
    lifetime_subscriptions!: string;

    @Column({ type: "varchar" })
    lifetime_favorited!: string;

    @Column({ type: "varchar" })
    views!: string;
}
