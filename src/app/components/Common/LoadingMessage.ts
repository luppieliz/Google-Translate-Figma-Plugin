import {fig} from '../../../plugin/controller';

export default function showLoadingNotification(message: string): () => void {
    const notificationHandler = fig.notify(message, {
        timeout: 10,
    });
    return function (): void {
        notificationHandler.cancel();
    };
}
