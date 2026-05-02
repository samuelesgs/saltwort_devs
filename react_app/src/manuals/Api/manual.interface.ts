export interface ManualResponse {
    id_manual:     number;
    name:          string;
    description:   string;
    url:           string;
    app:           App;
    manualRecords: ManualRecord[];
    manualFiles:   ManualFile[];
}

export interface App {
    id_app: number;
    name:   string;
}

export interface ManualFile {
    id_file:   number;
    name:      string;
    url:       string;
    type:      string;
    available: number;
}

export interface ManualRecord {
    id_record: number;
    detail: string;
    name: string;
}