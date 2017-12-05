"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Observable_1 = require("rxjs/Observable");
const Subject_1 = require("rxjs/Subject");
require("rxjs/add/observable/empty");
const filesystem_1 = require("./filesystem");
class DryRunSink extends filesystem_1.FileSystemSink {
    constructor(root = '', force = false) {
        super(root, force);
        this._subject = new Subject_1.Subject();
        this._fileDoesNotExistExceptionSet = new Set();
        this._fileAlreadyExistExceptionSet = new Set();
        this.reporter = this._subject.asObservable();
    }
    _fileAlreadyExistException(path) {
        this._fileAlreadyExistExceptionSet.add(path);
    }
    _fileDoesNotExistException(path) {
        this._fileDoesNotExistExceptionSet.add(path);
    }
    _done() {
        this._fileAlreadyExistExceptionSet.forEach(path => {
            this._subject.next({
                kind: 'error',
                description: 'alreadyExist',
                path,
            });
        });
        this._fileDoesNotExistExceptionSet.forEach(path => {
            this._subject.next({
                kind: 'error',
                description: 'doesNotExist',
                path,
            });
        });
        this._filesToDelete.forEach(path => {
            // Check if this is a renaming.
            for (const [from, _] of this._filesToRename) {
                if (from == path) {
                    // The event is sent later on.
                    return;
                }
            }
            const content = null;
            this._subject.next({ kind: 'delete', path, content });
        });
        this._filesToCreate.forEach((content, path) => {
            // Check if this is a renaming.
            for (const [_, to] of this._filesToRename) {
                if (to == path) {
                    // The event is sent later on.
                    return;
                }
            }
            if (this._fileAlreadyExistExceptionSet.has(path)
                || this._fileDoesNotExistExceptionSet.has(path)) {
                return;
            }
            this._subject.next({ kind: 'create', path, content: content.generate() });
        });
        this._filesToUpdate.forEach((content, path) => {
            this._subject.next({ kind: 'update', path, content: content.generate() });
        });
        this._filesToRename.forEach(([path, to]) => {
            this._subject.next({ kind: 'rename', path, to, content: null });
        });
        this._subject.complete();
        return Observable_1.Observable.empty();
    }
}
exports.DryRunSink = DryRunSink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJ5cnVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oYW5zbC9Tb3VyY2VzL2hhbnNsL2RldmtpdC8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuZ3VsYXJfZGV2a2l0L3NjaGVtYXRpY3Mvc3JjL3NpbmsvZHJ5cnVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztHQU1HO0FBQ0gsZ0RBQTZDO0FBQzdDLDBDQUF1QztBQUN2QyxxQ0FBbUM7QUFDbkMsNkNBQThDO0FBbUM5QyxnQkFBd0IsU0FBUSwyQkFBYztJQU81QyxZQUFZLElBQUksR0FBRyxFQUFFLEVBQUUsS0FBSyxHQUFHLEtBQUs7UUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBTmpELGFBQVEsR0FBRyxJQUFJLGlCQUFPLEVBQWUsQ0FBQztRQUN0QyxrQ0FBNkIsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQ2xELGtDQUE2QixHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFFbkQsYUFBUSxHQUE0QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRWQsQ0FBQztJQUVuRCwwQkFBMEIsQ0FBQyxJQUFZO1FBQy9DLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNTLDBCQUEwQixDQUFDLElBQVk7UUFDL0MsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsV0FBVyxFQUFFLGNBQWM7Z0JBQzNCLElBQUk7YUFDTCxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsV0FBVyxFQUFFLGNBQWM7Z0JBQzNCLElBQUk7YUFDTCxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDOUIsK0JBQStCO1lBQy9CLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNqQiw4QkFBOEI7b0JBQzlCLE1BQU0sQ0FBQztnQkFDVCxDQUFDO1lBQ0gsQ0FBQztZQUVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJO1lBQ3hDLCtCQUErQjtZQUMvQixHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDZiw4QkFBOEI7b0JBQzlCLE1BQU0sQ0FBQztnQkFDVCxDQUFDO1lBQ0gsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO21CQUN6QyxJQUFJLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUUsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUUsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFekIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxFQUFRLENBQUM7SUFDbEMsQ0FBQztDQUNGO0FBdEVELGdDQXNFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZW1wdHknO1xuaW1wb3J0IHsgRmlsZVN5c3RlbVNpbmsgfSBmcm9tICcuL2ZpbGVzeXN0ZW0nO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJ5UnVuRXJyb3JFdmVudCB7XG4gIGtpbmQ6ICdlcnJvcic7XG4gIGRlc2NyaXB0aW9uOiAnYWxyZWFkeUV4aXN0JyB8ICdkb2VzTm90RXhpc3QnO1xuICBwYXRoOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIERyeVJ1bkRlbGV0ZUV2ZW50IHtcbiAga2luZDogJ2RlbGV0ZSc7XG4gIHBhdGg6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRHJ5UnVuQ3JlYXRlRXZlbnQge1xuICBraW5kOiAnY3JlYXRlJztcbiAgcGF0aDogc3RyaW5nO1xuICBjb250ZW50OiBCdWZmZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIERyeVJ1blVwZGF0ZUV2ZW50IHtcbiAga2luZDogJ3VwZGF0ZSc7XG4gIHBhdGg6IHN0cmluZztcbiAgY29udGVudDogQnVmZmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBEcnlSdW5SZW5hbWVFdmVudCB7XG4gIGtpbmQ6ICdyZW5hbWUnO1xuICBwYXRoOiBzdHJpbmc7XG4gIHRvOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIERyeVJ1bkV2ZW50ID0gRHJ5UnVuRXJyb3JFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfCBEcnlSdW5EZWxldGVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfCBEcnlSdW5DcmVhdGVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfCBEcnlSdW5VcGRhdGVFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfCBEcnlSdW5SZW5hbWVFdmVudDtcblxuXG5leHBvcnQgY2xhc3MgRHJ5UnVuU2luayBleHRlbmRzIEZpbGVTeXN0ZW1TaW5rIHtcbiAgcHJvdGVjdGVkIF9zdWJqZWN0ID0gbmV3IFN1YmplY3Q8RHJ5UnVuRXZlbnQ+KCk7XG4gIHByb3RlY3RlZCBfZmlsZURvZXNOb3RFeGlzdEV4Y2VwdGlvblNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBwcm90ZWN0ZWQgX2ZpbGVBbHJlYWR5RXhpc3RFeGNlcHRpb25TZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICByZWFkb25seSByZXBvcnRlcjogT2JzZXJ2YWJsZTxEcnlSdW5FdmVudD4gPSB0aGlzLl9zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHJvb3QgPSAnJywgZm9yY2UgPSBmYWxzZSkgeyBzdXBlcihyb290LCBmb3JjZSk7IH1cblxuICBwcm90ZWN0ZWQgX2ZpbGVBbHJlYWR5RXhpc3RFeGNlcHRpb24ocGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fZmlsZUFscmVhZHlFeGlzdEV4Y2VwdGlvblNldC5hZGQocGF0aCk7XG4gIH1cbiAgcHJvdGVjdGVkIF9maWxlRG9lc05vdEV4aXN0RXhjZXB0aW9uKHBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2ZpbGVEb2VzTm90RXhpc3RFeGNlcHRpb25TZXQuYWRkKHBhdGgpO1xuICB9XG5cbiAgX2RvbmUoKSB7XG4gICAgdGhpcy5fZmlsZUFscmVhZHlFeGlzdEV4Y2VwdGlvblNldC5mb3JFYWNoKHBhdGggPT4ge1xuICAgICAgdGhpcy5fc3ViamVjdC5uZXh0KHtcbiAgICAgICAga2luZDogJ2Vycm9yJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdhbHJlYWR5RXhpc3QnLFxuICAgICAgICBwYXRoLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5fZmlsZURvZXNOb3RFeGlzdEV4Y2VwdGlvblNldC5mb3JFYWNoKHBhdGggPT4ge1xuICAgICAgdGhpcy5fc3ViamVjdC5uZXh0KHtcbiAgICAgICAga2luZDogJ2Vycm9yJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdkb2VzTm90RXhpc3QnLFxuICAgICAgICBwYXRoLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9maWxlc1RvRGVsZXRlLmZvckVhY2gocGF0aCA9PiB7XG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGlzIGEgcmVuYW1pbmcuXG4gICAgICBmb3IgKGNvbnN0IFtmcm9tLCBfXSBvZiB0aGlzLl9maWxlc1RvUmVuYW1lKSB7XG4gICAgICAgIGlmIChmcm9tID09IHBhdGgpIHtcbiAgICAgICAgICAvLyBUaGUgZXZlbnQgaXMgc2VudCBsYXRlciBvbi5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udGVudCA9IG51bGw7XG4gICAgICB0aGlzLl9zdWJqZWN0Lm5leHQoeyBraW5kOiAnZGVsZXRlJywgcGF0aCwgY29udGVudCB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9maWxlc1RvQ3JlYXRlLmZvckVhY2goKGNvbnRlbnQsIHBhdGgpID0+IHtcbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMgYSByZW5hbWluZy5cbiAgICAgIGZvciAoY29uc3QgW18sIHRvXSBvZiB0aGlzLl9maWxlc1RvUmVuYW1lKSB7XG4gICAgICAgIGlmICh0byA9PSBwYXRoKSB7XG4gICAgICAgICAgLy8gVGhlIGV2ZW50IGlzIHNlbnQgbGF0ZXIgb24uXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fZmlsZUFscmVhZHlFeGlzdEV4Y2VwdGlvblNldC5oYXMocGF0aClcbiAgICAgICAgICB8fCB0aGlzLl9maWxlRG9lc05vdEV4aXN0RXhjZXB0aW9uU2V0LmhhcyhwYXRoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N1YmplY3QubmV4dCh7IGtpbmQ6ICdjcmVhdGUnLCBwYXRoLCBjb250ZW50OiBjb250ZW50LmdlbmVyYXRlKCkgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5fZmlsZXNUb1VwZGF0ZS5mb3JFYWNoKChjb250ZW50LCBwYXRoKSA9PiB7XG4gICAgICB0aGlzLl9zdWJqZWN0Lm5leHQoeyBraW5kOiAndXBkYXRlJywgcGF0aCwgY29udGVudDogY29udGVudC5nZW5lcmF0ZSgpIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuX2ZpbGVzVG9SZW5hbWUuZm9yRWFjaCgoW3BhdGgsIHRvXSkgPT4ge1xuICAgICAgdGhpcy5fc3ViamVjdC5uZXh0KHsga2luZDogJ3JlbmFtZScsIHBhdGgsIHRvLCBjb250ZW50OiBudWxsIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fc3ViamVjdC5jb21wbGV0ZSgpO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuZW1wdHk8dm9pZD4oKTtcbiAgfVxufVxuIl19